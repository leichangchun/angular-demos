import { Component, OnInit , ViewContainerRef , ElementRef , ViewChild,  Renderer2 , ViewChildren, QueryList} from '@angular/core';
import { TipService } from './../../common/components/tip/tip.service';
import { DialogService } from './../../common/components/dialog/dialog.service';
import { TipType } from './../../common/type/data-type';
import { NzModalService } from 'ng-zorro-antd';
import { ConfirmationService } from 'primeng/api';

import { DialogComponent } from './../../common/components/dialog/dialog.component';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  @ViewChild('testdom' , { read: ViewContainerRef }) viewcontainer: ViewContainerRef;
  @ViewChild('testdom') viewelement: ElementRef;
  @ViewChildren('testdom') viewelements: QueryList<any>;
  @ViewChild(DialogComponent) viewcontent: DialogComponent;
  @ViewChildren(DialogComponent) viewcontents: QueryList<DialogComponent>;

  constructor(
    private tipservice: TipService,
    private dialogservice: DialogService,
    private confirmdialog: ConfirmationService,
    private nzModalservice: NzModalService,
    private render: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  getDomTest() {
    this.render.setStyle(this.viewelement.nativeElement , 'color' , 'red');
  }


  showSucTip () {
    this.tipservice.$showtip.next({
      showTip: true,
      tipText: '操作成功的提示',
      type: TipType.success
    });
  }

  showInfoTip () {
    this.tipservice.$showtip.next({
      showTip: true,
      tipText: '警告类型的提示',
      type: TipType.info
    });
  }

  showErrorTip () {
    this.tipservice.$showtip.next({
      showTip: true,
      tipText: '错误类型的提示',
      type: TipType.error,
      showClose: true
    });
  }

  showDialog1 () {
    this.dialogservice.showDialog({
      title: '弹框测试',
      content: '只有确定按钮，没有取消按钮！',
      cancelbtn : false,
      show: true,
      sure: () => {
        this.dialogservice.closeDialog();
      },
      cancel: () => {
        this.dialogservice.closeDialog();
      }
    });
  }

  showDialog2 () {
    this.dialogservice.showDialog({
      title: '弹框测试',
      content: '既有确定按钮，也有取消按钮，点击确定按钮，log(this)',
      cancelbtn : true,
      show: true,
      sure: () => {
        console.log(this);
        this.dialogservice.closeDialog();
      },
      cancel: () => {
        this.tipservice.$showtip.next({
          showTip: true,
          tipText: '弹框取消',
          type: TipType.info
        });
        this.dialogservice.closeDialog();
      }
    });
  }

  showPrimengDialog () {
    this.confirmdialog.confirm({
      header: 'Primeng ConfirmationDialog',
      message: '测试primeng的confirmationDialog组件的使用方式',
      icon: 'fa fa-thumbs-up',
      accept: () => {
        console.log(this);
      },
      reject: () => {
        console.log(this);
      }
    });
  }

  showNzDialog () {
    this.nzModalservice.confirm({
      title  : '您是否确认要删除这项内容',
      content: '<b>一些解释</b>',
      onOk : () => {
        this.showSucTip();
      },
      onCancel() {
      }
    });
  }
}
