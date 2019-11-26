import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/form-controls/custom-input/custom-input.component';

@NgModule({
  declarations: [PageLayoutComponent, CustomInputComponent],
  exports: [PageLayoutComponent, CustomInputComponent, ReactiveFormsModule, FormsModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
