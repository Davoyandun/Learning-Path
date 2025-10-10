export class Email {
  private constructor(private readonly _value: string) {}
  static create(raw: string) {
    const normalized = raw.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(normalized)) throw new Error("InvalidEmail");
    return new Email(normalized);
  }
  toString() { return this._value; }
  get value() { return this._value; }
}
