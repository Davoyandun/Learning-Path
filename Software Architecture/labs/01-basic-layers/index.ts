import express from 'express';
import { sessionRoutes } from './src/presentation/Session';
import { ScheduleSession } from './src/application/ScheduleSession';

import { InMemorySessionRepository } from './src/infrastructure/db/InMemorySessionRepository';
import { InMemoryEmailSenderRepository } from './src/infrastructure/db/EmalSenderRepository';

const app = express();
app.use(express.json());

const sessionRepository = new InMemorySessionRepository();
const emailSenderRepository = new InMemoryEmailSenderRepository();
const scheduleSession = new ScheduleSession(sessionRepository, emailSenderRepository);

app.use('/api', sessionRoutes(scheduleSession));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
