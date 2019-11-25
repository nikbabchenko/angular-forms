import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordsComponent } from './pages/passwords/passwords.component';
import { CreatePasswordComponent } from './pages/create-password/create-password.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PasswordsComponent
  },
  {
    path: 'create',
    component: CreatePasswordComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordsRoutingModule {}
