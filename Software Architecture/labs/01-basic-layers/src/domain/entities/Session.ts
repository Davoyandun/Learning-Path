import { generateId } from "../utils/utils"

export class Session {
    private constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly createdAt: Date,
        public readonly expiredAt: Date,


    ) { }

    static create(userId: string, createdAt: Date, expiredAt: Date): Session {
        const id = generateId()
        if (createdAt >= expiredAt) {
            throw new Error("Invalid date range")
        }
        return new Session(id, userId, createdAt, expiredAt)

    }
}