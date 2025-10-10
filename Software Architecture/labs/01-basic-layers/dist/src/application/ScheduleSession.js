"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleSession = void 0;
const Session_1 = require("../domain/entities/Session");
const ScheduleSession_1 = require("../domain/services/ScheduleSession");
class ScheduleSession {
    constructor(sessions, emailService) {
        this.sessions = sessions;
        this.emailService = emailService;
    }
    async exec(userId, date, expireDate, topic, userEmail) {
        const session = Session_1.Session.create(userId, date, expireDate);
        const existingSessions = await this.sessions.findByUserId(userId);
        if (!ScheduleSession_1.SchedulingRules.canSchedule(session, existingSessions)) {
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
exports.ScheduleSession = ScheduleSession;
