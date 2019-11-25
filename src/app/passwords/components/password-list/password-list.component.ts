import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordListComponent implements OnInit {
  @Input() passwords: Password[];
  constructor() {}

  ngOnInit() {}
}
