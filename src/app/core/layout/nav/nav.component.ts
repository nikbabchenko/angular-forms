import { Component, OnInit, Input } from '@angular/core';
import { INavRoute } from '../../models/nav-route.interface';

@Component({
  selector: 'pm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()
  routes: INavRoute[] = [];

  constructor() {}

  ngOnInit() {}
}
