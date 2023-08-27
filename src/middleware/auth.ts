import { db } from '../database/db';
import { NextFunction, Request, Response } from 'express';

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
    const key = req.headers['x-api-key'];

    if (!key) return res.sendStatus(401);
    else {
        const data = await db.users.findUnique({
            where: {
                key: key as string,
            },
            select: {
                user_id: true,
            },
        });

        data === null ? res.sendStatus(403) : next();
    }
};
