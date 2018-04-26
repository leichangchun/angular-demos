import { Injectable } from '@angular/core';
import { FormItem } from './form-list/form-item';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FormsService {

  public formData: FormItem [];

  public datasubject = new Subject<FormItem []>();
  constructor() {
   }

  getData(): Observable<FormItem []> {
    setTimeout(() => { // 模拟请求数据y
      this.formData = [
        {
          title: '购入一些零食',
          type: '饮食消费',
          detail: '辣条，薯片，奶糖，可乐等',
          count: '57',
          time: '2018-02-01',
        },
        {
          title: '交房租',
          type: '房租',
          detail: '房租，网费，修理费共计910，万恶的',
          count: '910',
          time: '2018-02-02',
        }
      ];

      this.datasubject.next(this.formData);
    }, 2000);
    return this.datasubject.asObservable();
  }

  setData(formitem: FormItem): void {
    this.datasubject.next([formitem]);
  }
}
