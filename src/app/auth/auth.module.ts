import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login.component';
import { SignUpComponent } from './pages/sign-up.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule]
})
export class AuthModule {}
