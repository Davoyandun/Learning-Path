
import { User } from "../entities/User";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    delete(id: string): Promise<void>;
    update(user: User): Promise<void>;
}