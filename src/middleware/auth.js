import Jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    else {
        Jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    }
};

export const generateToken = (user) =>
    Jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
