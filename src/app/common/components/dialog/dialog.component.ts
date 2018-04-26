import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { fadeIn } from './../../animations/fade';

import { DialogConfig } from './../../type/data-type';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [fadeIn]
})
export class DialogComponent implements OnInit {

  public config: DialogConfig = {
    title: '',
    content: '',
    cancelbtn : false,
    show: false,
    sure: () => {},
    cancel : () => {}
  };

  constructor(
    private dialogservice: DialogService
  ) {
    this.dialogservice.getDialogConfig().subscribe(_config => {
      this.config = Object.assign({}, this.config, _config);
    });
   }

  ngOnInit() {
  }
}
