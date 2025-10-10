import { generateId } from "../utils/utils"
import { Email } from "../value-objects/Email"

export class User {
    private constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: Email


    ) { }

    static create( name: string, email: string): User {
        const id = generateId();
        const emailVO = Email.create(email);
        return new User(id, name, emailVO);
    }
}