import monstersService from '../services/monsters';
import { NextFunction, Request, Response } from 'express';

export const getMonsters = async (req: Request, res: Response, next: NextFunction) => {
    const CR = parseFloat(req.query.challenge_rating as string);
    try {
        let monsters = null;
        isNaN(CR)
            ? (monsters = await monstersService.getAllMonsters())
            : (monsters = await monstersService.getByChallengeRating(CR));

        monsters
            ? res.status(200).json(monsters)
            : res.status(404).json({ message: 'No monsters found' });
    } catch (error) {
        next(error);
    }
};
