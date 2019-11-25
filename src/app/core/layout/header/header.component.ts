import { Component, OnInit } from '@angular/core';
import { INavRoute } from '../../models/nav-route.interface';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: INavRoute[] = [
    {
      link: ['passwords'],
      title: 'Passwords',
      options: { exact: true }
    },
    {
      link: ['passwords', 'create'],
      title: 'Create Password',
      options: { exact: true }
    }
  ];
  constructor(public themeService: ThemeService) {}

  ngOnInit() {}
}
