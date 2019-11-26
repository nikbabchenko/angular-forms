import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, OnInit, forwardRef } from '@angular/core';

export const TOGGLER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TogglerComponent),
  multi: true
};

@Component({
  selector: 'pm-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss'],
  providers: [TOGGLER_VALUE_ACCESSOR]
})
export class TogglerComponent implements OnInit, ControlValueAccessor {
  private _value = false;
  public isDisabled = false;

  set value(value: any) {
    this._value = value;
    this.notifyValueChange();
  }

  get value(): any {
    return this._value;
  }

  onChange: (value) => {};
  onTouched: () => {};

  constructor() {}

  notifyValueChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
      this.onTouched();
    }
  }

  onToggleChange(event: InputEvent) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
  }

  ngOnInit(): void {}

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
