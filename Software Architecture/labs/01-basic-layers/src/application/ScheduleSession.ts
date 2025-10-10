import { SessionRepository } from "../domain/ports/SessionRepository";
import { EmailSenderRepository } from "../domain/ports/EmailSenderRepository";
import { Session } from "../domain/entities/Session";


export class ScheduleSession {
  constructor(
    private sessions: SessionRepository,
    private emailService: EmailSenderRepository
  ) {}

  async exec( userId: string, date: Date, expireDate: Date, topic: string, userEmail: string ) {
    if( expireDate <= date ) {
      throw new Error("ExpireDateMustBeAfterSessionDate");
    }
    const session = Session.create(
        userId, 
        date,
        expireDate
    )

    const existingSessions = await this.sessions.findByUserId(userId);
    const hasConflict = existingSessions.some(s => 
      (date < s.expiredAt && expireDate > s.createdAt)
    );
    if (hasConflict) {
      throw new Error("SessionConflict");
    }
    await this.sessions.save(session);

    const emailContent = `
      Your session is scheduled for ${date.toISOString()} and will expire on ${expireDate.toISOString()}.
    `;

    await this.emailService.sendEmail(userEmail, "Session Scheduled", emailContent);
    return { sessionId: session.id };


  }
}