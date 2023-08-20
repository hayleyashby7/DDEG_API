import { generateToken } from '../middleware/auth.js';

export const generateUserToken = (req, res, next) => {
    try {
        const username = req.body.username;

        if (!username) {
            res.status(400).json({ message: 'Username is required' });
        } else {
            const token = generateToken({ username });
            res.status(201).json({ token });
        }
    } catch (error) {
        next(error);
    }
};
