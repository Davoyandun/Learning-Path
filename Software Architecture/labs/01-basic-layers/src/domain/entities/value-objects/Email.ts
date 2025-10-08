// /domain/value-objects/Email.ts
export class Email {
  private constructor(private readonly value: string) {}
  static create(raw: string) {
    if (!/^\S+@\S+\.\S+$/.test(raw)) throw new Error("InvalidEmail");
    return new Email(raw.toLowerCase());
  }
  toString() { return this.value; }
}