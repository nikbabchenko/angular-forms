import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { THEME } from '../constants/theme.constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme$ = new BehaviorSubject(THEME.light);
  constructor() {}

  changeTheme(theme: string) {
    this.currentTheme = theme;
  }

  init() {
    const storedTheme = localStorage.getItem('password-theme');
    this.changeTheme(storedTheme ? storedTheme : this.currentTheme);
  }

  set currentTheme(theme: string) {
    const rootEl = document.querySelector('html');
    if (theme === THEME.dark && this.currentTheme !== THEME.dark) {
      rootEl.classList.add('is-dark');
    } else {
      if (rootEl.classList.contains('is-dark')) {
        rootEl.classList.remove('is-dark');
      }
    }

    (document.getElementById('theme') as HTMLLinkElement).href = theme;
    localStorage.setItem('password-theme', theme);
    this.currentTheme$.next(theme);
  }

  get currentTheme(): string {
    return this.currentTheme$.getValue();
  }

  getCurrentTheme$() {
    return this.currentTheme$.asObservable;
  }
}
