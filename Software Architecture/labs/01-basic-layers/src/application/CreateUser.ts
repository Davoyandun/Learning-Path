// /application/CreateUser.ts
import { UserRepository } from "../domain/ports/UserRepository";
import { User } from "../domain/entities/User";

export class CreateUser {
  constructor(private users: UserRepository) {}
  async exec(input: { name: string; email: string }) {

    const existing = await this.users.findByEmail(input.email);
    if (existing) throw new Error("EmailAlreadyTaken");
    const user = User.create( input.name, input.email );
    await this.users.save(user);
    return { id: user.id };
  }
}