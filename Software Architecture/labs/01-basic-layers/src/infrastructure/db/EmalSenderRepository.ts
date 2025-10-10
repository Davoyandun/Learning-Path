import { Email } from "../../domain/entities/value-objects/Email";
import { EmailSenderRepository } from "../../domain/ports/EmailSenderRepository";

export class InMemoryEmailSenderRepository implements EmailSenderRepository {
    async sendEmail(to: string, subject: string, body: string): Promise<void> {
        console.log(`Sending email to ${to} with subject "${subject}" and body "${body}"`);
    }}