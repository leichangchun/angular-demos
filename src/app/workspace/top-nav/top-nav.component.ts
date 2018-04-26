import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './../../login/login.service';
import { HoverDirective } from './../../common/directive/hover.directive';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input () brand: string;
  public userName = '';
  private isShowout = false;
  constructor(
    private loginService: LoginService
  ) {
    this.userName = loginService.getUser();
  }

  ngOnInit() {
  }

  logout (): void {
    console.log('logout ');
    this.loginService.$loginSubject.next(false);
  }

  toggleLogout (event): void {
    console.log(event);
    this.isShowout = !this.isShowout;
  }

}
