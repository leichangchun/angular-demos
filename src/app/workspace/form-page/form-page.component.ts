import { Component, OnInit } from '@angular/core';

import { FormsService } from './forms.service';
import { WorkspaceGuardService } from './../workspace-guard.service';
import { DialogService} from './../../common/components/dialog/dialog.service';

import { FormItem } from './form-list/form-item';
import { NgForm} from '@angular/forms';

import { DialogConfig } from './../../common/type/data-type';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public editing = false;
  public editData = {
    title: '',
    type: '',
    detail: '',
    count: '',
    time: ''
  };
  public formList = [];
  // public dialog: DialogConfig = {
  //   title : '',
  //   content : '',
  //   cancel : true,
  //   show : false
  // };

  constructor(
    private formservice: FormsService,
    private guardservice: WorkspaceGuardService,
    private dialogservice: DialogService
  ) {

  }

  ngOnInit() { // 非第一次路由并不会再次调用
    // 获取数据
    this.formservice.getData().subscribe( value => {
      value.forEach( (item, index) => {
        this.formList.unshift(item);
      });
    });


    this.guardservice.showLeaveDialog().subscribe( value => {
      if (value) {
        this.dialogservice.showDialog({
          title: '离开当前组件',
          content: '您是想离开当前组件吗？测试路由守卫',
          cancelbtn : false,
          show: true,
          sure: () => {
            this.dialogservice.closeDialog();
            this.guardservice.canLeave(true);
          },
          cancel: () => {
            this.dialogservice.closeDialog();
            this.guardservice.canLeave(false);
          }
        });
      }
    });

    console.log('form page OnInit');

  }

  showEdit ( type: string = 'add') {
    // console.log(event); // 通过$event传递DOM事件对象，不会占用原参数的位置
    this.toggleEdit();
  }

  toggleEdit () {
    this.editing = !this.editing;
  }

  resetEdit () {
    this.editData = {
      title: '',
      type: '',
      detail: '',
      count: '',
      time: ''
    };
  }

  cancelEdit () {
    this.toggleEdit();
    this.resetEdit();
  }

  saveEdit (form: NgForm) {
    if (form.valid) {
      this.toggleEdit();
      this.formservice.setData(this.editData);
      this.resetEdit();
    }
  }

}
