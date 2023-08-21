import express from 'express';
import * as monsters from '../controllers/monsters.js';
import { authenticateUser } from '../middleware/auth.js';

export const router = express.Router();

// Get monsters
router.get('/monsters', authenticateUser, monsters.getMonsters);
