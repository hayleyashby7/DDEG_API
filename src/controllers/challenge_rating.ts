import { NextFunction, Request, Response } from 'express';
import { calculateChallengeRating } from '../services/challenge_rating';

export const setChallengeRating = async (req: Request, res: Response, next: NextFunction) => {
    const encounterRequest = req.body;
    const challengeRating = calculateChallengeRating(encounterRequest);

    return res.status(200).json({ challengeRating });
};
