import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../../models/registration-user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  registrationUser = new RegistrationUser();
  constructor() {}

  ngOnInit() {}

  onSubmit(registrationForm: NgForm) {
    console.log(registrationForm.form);
    console.log('Saved: ' + JSON.stringify(registrationForm.value));
  }
}
