import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { DialogConfig } from './../../type/data-type';
@Injectable()
export class DialogService {

  public $dialogconfig = new Subject<DialogConfig>();
  constructor() { }

  getDialogConfig (): Observable<DialogConfig> {
    return this.$dialogconfig.asObservable();
  }

  showDialog (config: DialogConfig): void {
    this.$dialogconfig.next(config);
  }

  closeDialog (): void {
    this.$dialogconfig.next({
      title: '',
      content: '',
      cancelbtn : false,
      show: false,
      sure: () => {},
      cancel: () => {}
    });
  }
}
