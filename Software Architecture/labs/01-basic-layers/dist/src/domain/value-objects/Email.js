"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(_value) {
        this._value = _value;
    }
    static create(raw) {
        const normalized = raw.trim().toLowerCase();
        if (!/^\S+@\S+\.\S+$/.test(normalized))
            throw new Error("InvalidEmail");
        return new Email(normalized);
    }
    toString() { return this._value; }
    get value() { return this._value; }
}
exports.Email = Email;
