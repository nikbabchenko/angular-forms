import { Component, OnInit, Input } from '@angular/core';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.scss']
})
export class PasswordItemComponent implements OnInit {
  @Input()
  password: Password;
  isPasswordVisible = false;

  constructor() {}

  ngOnInit() {}

  toggleVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
