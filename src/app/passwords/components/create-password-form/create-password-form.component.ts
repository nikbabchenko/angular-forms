import { Component, OnInit } from '@angular/core';
import { Password } from '../../models/password.class';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pm-create-password-form',
  templateUrl: './create-password-form.component.html',
  styleUrls: ['./create-password-form.component.scss']
})
export class CreatePasswordFormComponent implements OnInit {
  password = new Password();
  createPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createPasswordForm = this.fb.group({
      website: '',
      username: '',
      password: ''
    });
  }

  onSubmit() {
    console.log('--submit', this.createPasswordForm.value);
  }
}
