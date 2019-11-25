import { Injectable } from '@angular/core';
import { Password } from '../models/password.class';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PasswordsService {
  getPasswords() {
    return of([
      new Password({ website: 'http://google.com', username: 'ivan', password: '1231235553' }),
      new Password({ website: 'http://amazon.com', username: 'doe', password: '1231235553' }),
      new Password({ website: 'http://facebook.com', username: 'john', password: '1231235553' }),
      new Password({ website: 'http://gravatar.com', username: 'doe', password: '1231235553' }),
      new Password({ website: 'http://mobile-review.com', username: 'ivan', password: '1231235553' }),
      new Password({ website: 'http://aliexpress.com', username: 'ivan', password: '1231235553' })
    ]);
  }
}
