import express from 'express';
import * as monsters from '../controllers/monsters';
import * as encounter from '../controllers/encounter';
import { authenticateUser } from '../middleware/auth';

export const router = express.Router();

// Monsters
router.get('/monsters', authenticateUser, monsters.getMonsters);

// Enounter
router.post('/encounter', authenticateUser, encounter.generateEncounter)
