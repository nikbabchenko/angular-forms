import { IPassword } from './password.interface';

export class Password implements IPassword {
  id: number | string;
  website: string;
  username: string;
  password: string;

  constructor(password?: IPassword) {
    const { id } = password || ({} as any);
    const passwordId = id ? id : new Date().getTime();
    Object.assign(this, { id: passwordId }, password);
  }
}
