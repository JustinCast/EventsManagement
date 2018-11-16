export class User {
  constructor(
    public name?: string,
    public lastname?: string,
    public password?: string,
    public gender?: boolean,
    public country?: string,
    public state?: string,
    public phone?: string,
    public passport?: string,
    public email?: string,
    public expectatives?: string,
    public allergies?: string,
    public emergency_contact?: string,
    public id?: number,
    public dni?: string
  ) {}
}
