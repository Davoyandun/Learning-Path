import { SessionRepository } from "../../domain/ports/SessionRepository";
import { Session } from "../../domain/entities/Session";

export class InMemorySessionRepository implements SessionRepository {
  private store: Session[] = [];
    async findById(id: string): Promise<Session | null> {
    return this.store.find(s => s.id === id) || null;}

    async findByUserId(userId: string): Promise<Session[]> {
    return this.store.filter(s => s.userId === userId);
  }

  async save(session: Session): Promise<void> {
    this.store.push(session);
  }
    async delete(id: string): Promise<void> {
    this.store = this.store.filter(s => s.id !== id);
    }
    async update(session: Session): Promise<void> {
    const index = this.store.findIndex(s => s.id === session.id);
    if (index !== -1) {
      this.store[index] = session;
    }
}
  }