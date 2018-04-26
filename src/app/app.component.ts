import { Component , OnInit} from '@angular/core';
import { HttpService } from './common/services/http.service';
import { LoginService } from './login/login.service';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private _http: HttpService,
    private loginservie: LoginService
   ) {

    /*
    // http 测试
    console.log('*------已cnode社区接口为例，学习http-------*');
    this._http.testGet('/topics', {
        'page' : '2',
        'limit' : '10'
      }).subscribe(response => {
          console.log(response);
      }, error => {
          console.log(error);
      });

    this._http.testPost('/accesstoken', {
      accesstoken : 'c9e18ce5-f00b-48c3-886a-6b7fc427521d'
      }).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    */

    // service中的状态刷新会重置，登录状态可以通过localStorage管理
    if (window.localStorage.getItem('islogin') === 'true') {
      this.loginservie.$loginSubject.next(true);
    }
  }

  ngOnInit () {
    // 测试env 管理配置
    console.log( `测试enviroment : name = ${environment.name}` );
  }
}
