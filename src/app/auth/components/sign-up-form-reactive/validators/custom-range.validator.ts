import { AbstractControl } from '@angular/forms';

export function customRangeValidator(min: number, max: number) {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    const value = c.value;
    if (isNaN(value) || value < min || value > max) {
      return {
        customRange: true
      };
    }

    return null;
  };
}
