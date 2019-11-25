import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [PageLayoutComponent],
  exports: [PageLayoutComponent],
  imports: [CommonModule]
})
export class SharedModule {}
