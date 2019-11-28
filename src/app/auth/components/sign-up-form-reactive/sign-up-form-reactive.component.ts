import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from '../../models/registration-user.class';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { passwordsMatcher } from './validators/password-matcher';
import { customRangeValidator } from './validators/custom-range.validator';

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
      lastName: new FormControl(''),
      email: new FormControl(),
      withAddress: new FormControl(false),
      rating: new FormControl(1, customRangeValidator(1, 5)),
      passwordGroup: new FormGroup(
        {
          password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
          confirmPassword: new FormControl(null, Validators.required)
        },
        { validators: passwordsMatcher }
      )
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
