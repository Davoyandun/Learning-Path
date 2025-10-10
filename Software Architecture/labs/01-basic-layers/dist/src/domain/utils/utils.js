"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
function generateId() {
    return (Math.random() + 1).toString(36).substring(7);
}
