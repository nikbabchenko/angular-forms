import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Password } from '../../models/password.class';

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
      website: ['', [Validators.minLength(10), Validators.required]],
      username: ['', [Validators.minLength(10)]],
      password: '',
      address: this.fb.array([this.createAddress()])
    });
  }

  get addressArrayControl(): FormArray {
    return this.createPasswordForm.get('address') as FormArray;
  }

  createAddress() {
    return this.fb.group({
      id: [new Date().getTime()],
      text: ['', Validators.minLength(3)]
    });
  }

  addAddress() {
    this.addressArrayControl.push(this.createAddress());
  }

  removeAddress(index: number) {
    this.addressArrayControl.removeAt(index);
  }

  isFirst(i: number) {
    return i !== 0;
  }

  onSubmit() {
    console.log('--submit', this.createPasswordForm.value);
  }
}
