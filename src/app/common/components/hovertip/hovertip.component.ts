import { Component, OnInit , Input , } from '@angular/core';
@Component({
  selector: 'app-hovertip',
  templateUrl: './hovertip.component.html',
  styleUrls: ['./hovertip.component.scss']
})
export class HovertipComponent implements OnInit {

  @Input() tipText = 'test';
  constructor(

  ) { }

  ngOnInit() {
  }

}
