import { Component, OnInit } from '@angular/core';
import { FormControl , Validators, FormGroup , FormBuilder, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  // public name = new FormControl('' , {
  //   validators : Validators.required,
  //   updateOn : 'blur'
  // });

  // public loginForm = new FormGroup({
  //   name : new FormControl('', Validators.maxLength(20)),
  //   psw : new FormControl('')
  // }, Validators.required);

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    // this.loginForm = fb.group({
    //   name : ['' , Validators.required],
    //   psw : ['']
    // });
    this.loginForm = fb.group({
      name: this.fb.group({
        firstname: ['' , Validators.required],
        lastname: ['']
      } , {
        validator : this.sameName()
      }),
      psw: ['' , Validators.required]
    });
  }


  sameName (): ValidatorFn {
    console.log(this);
    return (control: FormGroup): { [key: string]: any} => {
      console.log(control);
      return control.get('firstname').value === control.get('lastname').value ? { 'sameName' : true } : null;
    };
  }

  ngOnInit() {
  }

  login () {

  }

  getFormControl(name: string) {
    return this.loginForm.get(name);
  }

}
