import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/form-controls/custom-input/custom-input.component';
import { TogglerComponent } from './components/form-controls/toggler/toggler.component';

@NgModule({
  declarations: [PageLayoutComponent, CustomInputComponent, TogglerComponent],
  exports: [PageLayoutComponent, CustomInputComponent, TogglerComponent, ReactiveFormsModule, FormsModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
