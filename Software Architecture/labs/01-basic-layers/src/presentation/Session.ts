import Router, { Request, Response } from 'express';
import { ScheduleSession} from '../application/ScheduleSession';

export const sessionRouter = Router();


export function sessionRoutes(
  scheduleSession: ScheduleSession
) {
    sessionRouter.post('/sessions', async (req: Request, res: Response) => {
    const { userId, date, expireDate, topic, userEmail } = req.body;
    try {
      const result = await scheduleSession.exec(
        userId, 
        new Date(date), 
        new Date(expireDate), 
        topic, 
        userEmail
      );
      res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
    

    });
    return sessionRouter;
}