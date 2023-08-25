import { authDB } from '../database/db';
import { NextFunction, Request, Response } from 'express';

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers);
    const key = req.headers['x-api-key'];

    if (!key) return res.sendStatus(401);
    else {
        const { data, error } = await authDB.from('users').select('*').eq('key', key);

        if (error || data === null) return res.sendStatus(403);
        next();
    }
};
