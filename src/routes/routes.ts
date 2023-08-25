import express from 'express';
import * as monsters from '../controllers/monsters';
import { authenticateUser } from '../middleware/auth';

export const router = express.Router();

// Get monsters
router.get('/monsters', authenticateUser, monsters.getMonsters);
