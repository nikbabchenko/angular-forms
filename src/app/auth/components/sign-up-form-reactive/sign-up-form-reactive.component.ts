import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../../models/registration-user.class';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pm-sign-up-form-reactive',
  templateUrl: './sign-up-form-reactive.component.html',
  styleUrls: ['./sign-up-form-reactive.component.scss']
})
export class SignUpFormReactiveComponent implements OnInit {
  registrationUser = new RegistrationUser();
  registrationForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl(),
      email: new FormControl(),
      withAddress: new FormControl(false),
      city: new FormControl(),
      street: new FormControl()
    });
  }

  onSubmit() {
    console.log('--registrationForm values', this.registrationForm.value);
    console.log('--registrationForm model', this.registrationForm);
  }

  patchForm() {
    this.registrationForm.patchValue({
      firstName: 'Firstname Patched',
      lastName: 'And LastName as well'
    });
  }
}
