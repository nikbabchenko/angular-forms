import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, OnInit, forwardRef } from '@angular/core';

export const COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CounterComponent),
  multi: true
};

@Component({
  selector: 'pm-counter-name',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [COUNTER_VALUE_ACCESSOR]
})
export class CounterComponent implements OnInit, ControlValueAccessor {
  private _value: any;

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

  ngOnInit(): void {}

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  writeValue(obj: any): void {
    this._value = Number(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
