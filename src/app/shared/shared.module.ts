import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/form-controls/custom-input/custom-input.component';
import { TogglerComponent } from './components/form-controls/toggler/toggler.component';
import { CounterComponent } from './components/form-controls/counter/counter.component';
import { FormErrorsDirective } from './directives/form.errors.directive';

@NgModule({
  declarations: [PageLayoutComponent, CustomInputComponent, TogglerComponent, CounterComponent, FormErrorsDirective],
  exports: [PageLayoutComponent, CustomInputComponent, TogglerComponent, ReactiveFormsModule, FormsModule, FormErrorsDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
