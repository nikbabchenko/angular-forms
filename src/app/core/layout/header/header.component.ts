import { Component, OnInit } from '@angular/core';
import { INavRoute } from '../../models/nav-route.interface';
import { ThemeService } from '../../services/theme.service';
import { THEME } from '../../constants/theme.constants';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowMobileMenu = false;

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

  onThemeChange() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }
}
