export class RegistrationUser {
  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public withAddress = false,
    public city = '',
    public street = '',
    public password = ''
  ) {}
}
