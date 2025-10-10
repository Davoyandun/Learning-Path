"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const User_1 = require("../domain/entities/User");
class CreateUser {
    constructor(users) {
        this.users = users;
    }
    async exec(input) {
        const normalizedEmail = input.email.trim().toLowerCase();
        const existing = await this.users.findByEmail(normalizedEmail);
        if (existing)
            throw new Error("EmailAlreadyTaken");
        const user = User_1.User.create(input.name, normalizedEmail);
        await this.users.save(user);
        return { id: user.id };
    }
}
exports.CreateUser = CreateUser;
