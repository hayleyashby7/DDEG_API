import express from 'express';
import * as monsters from '../controllers/monsters.js';

export const router = express.Router();

router.get('/monsters', monsters.getMonsters);
