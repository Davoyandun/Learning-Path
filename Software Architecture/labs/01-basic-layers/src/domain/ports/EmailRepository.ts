export interface EmailRepository {
    sendEmail(to: string, subject: string, body: string): Promise<void>;
}