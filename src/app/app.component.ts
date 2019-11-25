import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { THEME } from './core/constants/theme.constants';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'password-manager';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.init();
  }
}
