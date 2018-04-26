import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { TipConfig } from './../../type/data-type';

@Injectable()
export class TipService {

  public $showtip = new Subject<TipConfig>();
  constructor() { }

  toggleTipStatu (): Observable<any> {
    return this.$showtip.asObservable();
  }
}
