"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Session_1 = require("./src/presentation/Session");
const ScheduleSession_1 = require("./src/application/ScheduleSession");
const InMemorySessionRepository_1 = require("./src/infrastructure/db/InMemorySessionRepository");
const EmailSenderRepository_1 = require("./src/infrastructure/db/EmailSenderRepository");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const sessionRepository = new InMemorySessionRepository_1.InMemorySessionRepository();
const emailSenderRepository = new EmailSenderRepository_1.InMemoryEmailSenderRepository();
const scheduleSession = new ScheduleSession_1.ScheduleSession(sessionRepository, emailSenderRepository);
app.use('/api', (0, Session_1.sessionRoutes)(scheduleSession));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
