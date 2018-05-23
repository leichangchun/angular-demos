import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
import { routeAnimate } from './../common/animations/routeAnimate';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  animations: [routeAnimate]
})
export class WorkspaceComponent implements OnInit {
  public brand = 'Angular Demo';
  public routerCheck = false;
  public state = 'active';
  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe( event => {
      this.routerCheck = !this.routerCheck;
      this.state = this.routerCheck ? 'inactive' : 'active';

    });
  }

}
