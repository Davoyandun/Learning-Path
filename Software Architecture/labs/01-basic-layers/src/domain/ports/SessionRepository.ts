import { Session } from "../entities/Session";

export interface SessionRepository {
    findById(id: string): Promise<Session | null>;
    save(session: Session): Promise<void>;
    findByUserId(userId: string): Promise<Session[]>;
    delete(id: string): Promise<void>;
    update(session: Session): Promise<void>;
}