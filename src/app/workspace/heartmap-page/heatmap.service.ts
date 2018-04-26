import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '../../common/services/http.service';

@Injectable()
export class HeatmapService {

  constructor(
    private http: HttpClient
  ) { }

  getHeartData (): Observable<any> {
    return this.http.get('assets/data/heartmap.json');
  }
}
