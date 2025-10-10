// /domain/value-objects/Email.ts
export class Email {
  private constructor(private readonly _value: string) {}
  static create(raw: string) {
    if (!/^\S+@\S+\.\S+$/.test(raw)) throw new Error("InvalidEmail");
    return new Email(raw.toLowerCase());
  }
  toString() { return this._value; }
  get value() { return this._value; }
}