import { AbstractControl } from '@angular/forms';

export function passwordsMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmPasswordControl = c.get('confirmPassword');

  if (passwordControl.value !== confirmPasswordControl.value) {
    return { passwordsMatch: true };
  }

  return null;
}
