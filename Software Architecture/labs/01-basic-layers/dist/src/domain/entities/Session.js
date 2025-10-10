"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const utils_1 = require("../utils/utils");
class Session {
    constructor(id, userId, createdAt, expiredAt) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.expiredAt = expiredAt;
    }
    static create(userId, createdAt, expiredAt) {
        const id = (0, utils_1.generateId)();
        const createdTime = createdAt.getTime();
        const expiredTime = expiredAt.getTime();
        if (Number.isNaN(createdTime) || Number.isNaN(expiredTime)) {
            throw new Error("InvalidDate");
        }
        if (createdTime >= expiredTime) {
            throw new Error("InvalidDateRange");
        }
        return new Session(id, userId, createdAt, expiredAt);
    }
}
exports.Session = Session;
