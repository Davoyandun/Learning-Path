"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const utils_1 = require("../utils/utils");
const Email_1 = require("../value-objects/Email");
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    static create(name, email) {
        const id = (0, utils_1.generateId)();
        const emailVO = Email_1.Email.create(email);
        return new User(id, name, emailVO);
    }
}
exports.User = User;
