import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  exports: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class CoreModule {}
