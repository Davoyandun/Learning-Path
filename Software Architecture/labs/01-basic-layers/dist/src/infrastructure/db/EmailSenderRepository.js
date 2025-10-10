"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryEmailSenderRepository = void 0;
class InMemoryEmailSenderRepository {
    async sendEmail(to, subject, body) {
        console.log(`Sending email to ${to} with subject "${subject}" and body "${body}"`);
    }
}
exports.InMemoryEmailSenderRepository = InMemoryEmailSenderRepository;
