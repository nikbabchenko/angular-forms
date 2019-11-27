import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'pm-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent {
  private currentValue: string;
  public isDisabled = false;
  public isPassword = false;
  private _type;
  public showEye = false;

  constructor() {}

  @Input() placeholder: string;
  @Input() label: string;
  @Input() hasIcon: boolean;
  // Both onChange and onTouched are functions
  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() set value(value: string) {
    this.currentValue = value;
    this.onChange(value);
    this.onTouched();
    console.log('--CustomInput', this);
  }

  @Input()
  set type(type: 'password' | 'text') {
    if (type === 'password') {
      this.showEye = true;
      this.isPassword = true;
    }
    this._type = type;
  }

  get type() {
    return this._type;
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  get value() {
    return this.currentValue;
  }

  writeValue(value) {
    if (value) {
      this.currentValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  toggleType() {
    this._type = this.isPassword ? 'text' : 'password';
    this.isPassword = this._type === 'password';
  }
}
