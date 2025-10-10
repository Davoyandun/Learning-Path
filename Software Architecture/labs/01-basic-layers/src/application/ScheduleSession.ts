import { SessionRepository } from "../domain/ports/SessionRepository";
import { EmailSenderRepository } from "../domain/ports/EmailSenderRepository";
import { Session } from "../domain/entities/Session";
import { SchedulingRules } from "../domain/services/ScheduleSession";


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
    if (!SchedulingRules.canSchedule(session, existingSessions)) {
      throw new Error("UserHasAnotherSessionAtTheSameTime");
    }
    await this.sessions.save(session);

    const emailContent = `
      Your session is scheduled for ${date.toISOString()} and will expire on ${expireDate.toISOString()}.
    `;

    await this.emailService.sendEmail(userEmail, "Session Scheduled", emailContent);
    return { sessionId: session.id };


  }
}