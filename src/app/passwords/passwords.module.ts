import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsRoutingModule } from './passwords-routing.module';
import { PasswordsComponent } from './pages/passwords/passwords.component';
import { CreatePasswordComponent } from './pages/create-password/create-password.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordItemComponent } from './components/password-item/password-item.component';
import { PasswordListComponent } from './components/password-list/password-list.component';

@NgModule({
  declarations: [PasswordsComponent, CreatePasswordComponent, DetailsComponent, PasswordItemComponent, PasswordListComponent],
  imports: [CommonModule, PasswordsRoutingModule, SharedModule]
})
export class PasswordsModule {}
