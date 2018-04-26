import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  // 假设的用户信息
  private userInfo = {
    name : 'lei',
    id : '111'
  };
  // 登录状态
  private islogin = false;
  // 重定向的Url
  private redirectUrl: string;
  public $loginSubject = new Subject <boolean>();
  constructor(
    private router: Router
  ) {
    this.$loginSubject.asObservable().subscribe( bool => { // 登录成功后改变登录状态并写入localStorage
      this.islogin = bool;
      window.localStorage.setItem('islogin', `${bool}`);
      if (!bool) {
        this.router.navigate(['/login']);
      }
    });
  }

  login (user): Promise<boolean> {
    // 模拟登录及帐号密码验证
    return new Promise( resolve => {
      setTimeout( () => {
        resolve(user.name
                && user.name === 'lei'
                && user.pwd
                && user.pwd === 'lei123');
      }, 1000);
    });
  }

  getUser (): string {
    return this.userInfo.name;
  }

  checkLogin (): boolean {
    return this.islogin;
  }

  setReUrl (url: string) {
    this.redirectUrl = url;
  }

  getReUrl (): string {
    // 直接访问的login 会导致redirectUrl为undefined，默认返回 /workspace
    return this.redirectUrl || '/workspace';
  }
}
