import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Type } from '@angular/compiler/src/core';

interface DateInfo {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

type ChangeType = 'month' | 'year';

@Component({
  selector: 'app-ldatepicker',
  templateUrl: './ldatepicker.component.html',
  styleUrls: ['./ldatepicker.component.scss'],
  animations: [
    trigger('contentState', [
      state('left', style({
        transform: 'translateX(-100%)'
      })),
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('right', style({
        transform: 'translateX(100%)'
      })),
      transition('left <=> show', animate('200ms ease-in')),
      transition('show <=> right', animate('200ms ease-in'))
    ])
  ]
})
export class LdatepickerComponent implements OnInit {

  public weeks = ['一', '二', '三', '四', '五', '六', '日'];
  public days: number [];
  public hours: number [] = [];
  public minutes: number [] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  public validStart = null;
  public validEnd = null;
  public selectedDayIndex = null;
  public today = {year : 0, month : 0, day : 0};
  public states = ['show', 'right', 'right'];
  public selected: DateInfo = {year : 0, month : 0, day : 0, hour : 0, minute : 0};
  constructor() {

  }

  ngOnInit() {
    // 写入hours数据
    for (let i = 0 ; i < 24 ; i++) {
      this.hours.push(i);
    }
    // 默认选中当天
    this.selected = this.getDateInfo();
    // 当天年月日 ， 用来判断当天日期高亮
    const {year, month, day} = this.selected;
    this.today =  {year, month, day};
    // 初始化数据
    this.getDays();
  }

  // 产生日期列表
  getDays () {
    const firstDay = new Date(this.selected.year , this.selected.month , 1);
    const _today = this.selected.day;
    // 当月第一天是周几
    const _weekDay = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
    const _monthDays = this.getDaysInMonth(this.selected.year , this.selected.month);
    const _prevMonthDays = this.getDaysInMonth(this.selected.year , this.selected.month - 1);
    this.createDays(_today , _weekDay , _monthDays , _prevMonthDays);
  }

  // 获取一个日期的 年，月，日，小时，分钟
  getDateInfo (_date = new Date()) {
    const dayInfo: DateInfo = {
      year : 0,
      month : 0,
      day : 0,
      hour : 0,
      minute : 0
    };
    const today = new Date(_date);
    dayInfo.year = today.getFullYear();
    dayInfo.month = today.getMonth();
    dayInfo.day = today.getDate();
    dayInfo.hour = today.getHours();
    dayInfo.minute = today.getMinutes();

    return dayInfo;
  }

  // 获取所传入月份的总天数
  getDaysInMonth(_year: number, _month: number) {
    return new Date(_year , _month + 1 , 0).getDate();
  }

  createDays( _today , _weekDay , _monthDays , _prevMonthDays) {
    const _days = [];
    // 补上个月的天数
    const prev = _weekDay === 1 ? 7 : (_weekDay - 1);
    const next = 6 * 7 - prev - _monthDays;
    for (let i = 0 ; i < prev ; i++) {
        _days.unshift(_prevMonthDays - i);
    }
    // 写这个月的天数
    for (let i = 1 ; i <= _monthDays ; i++) {
      _days.push(i);
    }
    // 写下个月的天数
    for (let i = 1 ; i <= next ; i++) {
      _days.push(i);
    }

    // 写到days中
    this.days = _days;
    this.validStart = prev;
    this.validEnd = prev + _monthDays - 1;
    if (this.isToDay()) {
      this.selectedDayIndex = prev + _today - 1;
    } else {
      this.selectedDayIndex = null;
    }
  }

  isToDay (): boolean {
    if (this.selected.year === this.today.year &&
        this.selected.month === this.today.month &&
        this.selected.day === this.today.day) {

      return true;
    }
    return false;
  }

  changeDate ( _number , type: ChangeType , select = false) {
    if (select) {
      this.selected[type] = _number;
    } else {
      this.selected[type] = this.selected[type] + _number;
    }
    // 调整之后可能会有负数，转成正常的日期
    const {year , month , day} = this.selected;
    this.selected = this.getDateInfo(new Date(year , month , day));
    this.getDays();
  }

  chioceDay (_index: number , _day: number) {
    if (_index >= this.validStart && _index <= this.validEnd) {
      this.selected.day = _day;
      this.states[0] = 'left';
      this.states[1] = 'show';
    }
  }

  chioceHour (_hour: number) {
    this.selected.hour = _hour;
    this.states[1] = 'left';
    this.states[2] = 'show';
  }

  chioceMinute (_index: number) {
    this.selected.minute = this.minutes[_index];
    console.log(this.selected);
  }

  goBack (_level) {
    if (_level === 0) {
      this.states[0] = 'show';
      this.states[1] = 'right';
    }
    if (_level === 1) {
      this.states[1] = 'show';
      this.states[2] = 'right';
    }
  }
}
