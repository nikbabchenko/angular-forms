import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { THEME } from '../constants/theme.constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme$ = new BehaviorSubject(THEME.light);
  isDark = this.currentTheme === THEME.dark;
  constructor() {}

  changeTheme(theme: string) {
    this.currentTheme = theme;
  }

  toggleTheme() {
    this.changeTheme(this.isDark ? THEME.light : THEME.dark);
  }

  init() {
    const storedTheme = localStorage.getItem('password-theme');
    this.changeTheme(storedTheme ? storedTheme : this.currentTheme);
  }

  set currentTheme(theme: string) {
    const rootEl = document.querySelector('html');
    if (theme === THEME.dark) {
      rootEl.classList.add('is-dark');
    } else {
      if (rootEl.classList.contains('is-dark')) {
        rootEl.classList.remove('is-dark');
      }
    }

    (document.getElementById('theme') as HTMLLinkElement).href = theme;
    localStorage.setItem('password-theme', theme);
    this.currentTheme$.next(theme);
    this.isDark = theme === THEME.dark;
  }

  get currentTheme(): string {
    return this.currentTheme$.getValue();
  }

  getCurrentTheme$() {
    return this.currentTheme$.asObservable;
  }
}
