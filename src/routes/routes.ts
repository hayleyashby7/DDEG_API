import express from 'express';
import * as monsters from '../controllers/monsters';
import * as challengeRating from '../controllers/challenge_rating';
import { authenticateUser } from '../middleware/auth';

export const router = express.Router();

// Monsters
router.get('/monsters', authenticateUser, monsters.getMonsters);

// Challenge Ratings
router.post('/challenge_rating', authenticateUser, challengeRating.setChallengeRating);
