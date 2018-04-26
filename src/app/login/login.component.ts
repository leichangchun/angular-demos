import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HoverDirective } from './../common/directive/hover.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {
    name : '',
    pwd : ''
  };

  constructor(private loginServe: LoginService,
              private router: Router
  ) {

   }

  ngOnInit() {
  }

  login (): void {
    this.loginServe.login(this.user).then( response => {
      console.log(response);
      if (response) {
        this.loginServe.$loginSubject.next(true);
        this.router.navigate([this.loginServe.getReUrl()]);
      } else {

      }
    }).catch(error => {
      console.dir(error);
    });
  }

  testInput ( _input: any) {
    console.dir(_input);
  }
}
