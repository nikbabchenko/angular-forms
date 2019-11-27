import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpFormReactiveComponent } from './components/sign-up-form-reactive/sign-up-form-reactive.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, SignUpFormComponent, SignUpFormReactiveComponent, LoginFormComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule]
})
export class AuthModule {}
