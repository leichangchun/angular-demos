import { Component, OnInit, Input } from '@angular/core';
import { FormItem } from './form-item';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  @Input () formData: FormItem [];
  constructor(
  ) {}

  ngOnInit() {
    console.log('form list OnInit！');
  }
}
