"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = sessionRoutes;
const express_1 = __importDefault(require("express"));
function sessionRoutes(scheduleSession) {
    const router = (0, express_1.default)();
    router.post('/sessions', async (req, res) => {
        const { userId, date, expireDate, topic, userEmail } = req.body;
        try {
            const result = await scheduleSession.exec(userId, new Date(date), new Date(expireDate), topic, userEmail);
            res.status(201).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
            console.error(error);
        }
    });
    return router;
}
