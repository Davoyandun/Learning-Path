export interface EmailSenderRepository {
    sendEmail(to: string, subject: string, body: string): Promise<void>;
}