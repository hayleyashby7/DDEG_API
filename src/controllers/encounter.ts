import { NextFunction, Request, Response } from 'express';
import encounterService from '../services/encounter';

export const generateEncounter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const request = req.body;
        if (Object.keys(request).length === 0) {
            return res.status(400).json({ error: 'No encounter request body provided' });
        }

        const encounter = await encounterService.generateEncounter(request);

        if (!encounter.monsters) {
            return res.status(400).json({ error: 'No encounter generated' });
        }

        return res.status(200).json({ ...encounter });
    } catch (err) {
        const error = err as Error;
        next(res.status(400).json({ error: error.message }));
    }
};
