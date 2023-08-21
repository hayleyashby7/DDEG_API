import { authDB } from '../database/db.js';

export const authenticateUser = async (req, res, next) => {
    const key = req.headers['x-api-key'];

    if (!key) return res.sendStatus(401);
    else {
        const { data, error } = await authDB.from('users').select('*').eq('key', key);

        if (error || data === null) return res.sendStatus(403);
        next();
    }
};
