import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePasswordFormComponent } from '../../components/create-password-form/create-password-form.component';

@Component({
  selector: 'pm-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  @ViewChild(CreatePasswordFormComponent, { static: true }) createPasswordFormComponent: CreatePasswordComponent;
  constructor() {}

  ngOnInit() {
    console.log('--passwordForm', this.createPasswordFormComponent.createPasswordFormComponent);
  }
}
