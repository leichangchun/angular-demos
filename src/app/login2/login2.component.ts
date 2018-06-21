import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  public name = new FormControl();
  constructor() { }

  ngOnInit() {
  }

  login () {
    console.log(this.name);
  }

}
