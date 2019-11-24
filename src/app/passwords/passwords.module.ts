import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsRoutingModule } from './passwords-routing.module';
import { PasswordsComponent } from './pages/passwords/passwords.component';
import { CreatePasswordComponent } from './pages/create-password/create-password.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [PasswordsComponent, CreatePasswordComponent, DetailsComponent],
  imports: [CommonModule, PasswordsRoutingModule]
})
export class PasswordsModule {}
