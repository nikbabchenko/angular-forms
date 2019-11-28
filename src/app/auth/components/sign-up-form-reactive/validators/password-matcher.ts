import { AbstractControl, FormGroup } from '@angular/forms';

export function passwordsMatcher(c: FormGroup): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmPasswordControl = c.get('confirmPassword');

  if (passwordControl.value !== confirmPasswordControl.value) {
    return { passwordsMatch: true };
  }

  return null;
}
