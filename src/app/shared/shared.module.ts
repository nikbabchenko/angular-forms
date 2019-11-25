import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageLayoutComponent],
  exports: [PageLayoutComponent, ReactiveFormsModule, FormsModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
