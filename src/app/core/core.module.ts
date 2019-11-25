import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  exports: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule]
})
export class CoreModule {}
