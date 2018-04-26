/**
 * 路由守卫测试
 */
import { Injectable } from '@angular/core';
import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FormPageComponent } from './form-page/form-page.component';
import { Subject } from 'rxjs/Subject';

import { LoginService } from './../login/login.service';

@Injectable()
export class WorkspaceGuardService implements CanActivate, CanActivateChild, CanDeactivate <FormPageComponent>, CanLoad {
  private $canDeactivate = new Subject <boolean>();
  private $showDialog = new Subject <boolean>();
  constructor(
    private loginserve: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('WorkspaceGuardService----- canActivate called!');
    // 进入workspace之前判断是否登录
    if (this.loginserve.checkLogin()) {
      return true;
    }
    // 未登录，记录URL，跳转到登录页
    this.loginserve.setReUrl(state.url);
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('WorkspaceGuardService----- canActivateChild called!');
    return true;
  }

  canDeactivate(
    component: FormPageComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('WorkspaceGuardService----- canDeactivate called!');
    this.$showDialog.next(true);
    return this.$canDeactivate.asObservable();
  }

  canLeave( bool: boolean) {
    this.$canDeactivate.next(bool);
  }

  showLeaveDialog () {
    return this.$showDialog.asObservable();
  }

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('WorkspaceGuardService----- canLoad called!');
    return true;
  }
}
