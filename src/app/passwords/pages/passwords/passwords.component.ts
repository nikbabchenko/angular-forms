import { Component, OnInit } from '@angular/core';
import { PasswordsService } from '../../services/passwords.service';
import { Observable } from 'rxjs';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {
  passwords$: Observable<Password[]>;
  constructor(private passwordsService: PasswordsService) {}

  ngOnInit() {
    this.passwords$ = this.passwordsService.getPasswords();
  }
}
