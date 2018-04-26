import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { config } from './../base.config';
import { Observable } from 'rxjs/Observable';

// 参数类型声明
interface ParamsConfig  {
    [propName: string]: string | string [];
}

@Injectable()
export class HttpService {
    constructor (
        private http: HttpClient
    ) {

    }

    testGet (_url: string , _params ?: ParamsConfig): Observable<any> {
        // 拼接接口
        const url = config.baseUrl + _url;
        // 设置url中的参数
        // const params = new HttpParams().set('page', '2').set('tab', 'ask').set('limit' , '10');
        const params = new HttpParams({
            fromObject : _params
        });
        // 自定义header
        // const headers = new HttpHeaders().set('X-myself' , 'self header for test');

        // 返回请求
        return this.http.get(url, {
            params
        });
    }

    testPost (_url: string , _params: any): Observable<any> {
        const url = config.baseUrl + _url;

        return this.http.post(url, _params);
    }
}
