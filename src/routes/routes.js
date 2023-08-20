import express from 'express';
import * as monsters from '../controllers/monsters.js';
import { authenticateUser } from '../middleware/auth.js';
import * as auth from '../controllers/auth.js';

export const router = express.Router();

// Authenticate user
router.post('/user', auth.generateUserToken);

// Get monsters
router.get('/monsters', authenticateUser, monsters.getMonsters);
