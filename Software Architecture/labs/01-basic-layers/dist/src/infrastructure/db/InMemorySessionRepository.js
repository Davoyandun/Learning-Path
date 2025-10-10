"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySessionRepository = void 0;
class InMemorySessionRepository {
    constructor() {
        this.store = [];
    }
    async findById(id) {
        return this.store.find((session) => session.id === id) || null;
    }
    async findByUserId(userId) {
        return this.store.filter((session) => session.userId === userId);
    }
    async save(session) {
        this.store.push(session);
    }
    async delete(id) {
        this.store = this.store.filter((session) => session.id !== id);
    }
    async update(session) {
        const index = this.store.findIndex((s) => s.id === session.id);
        if (index !== -1) {
            this.store[index] = session;
        }
    }
}
exports.InMemorySessionRepository = InMemorySessionRepository;
