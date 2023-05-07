import express from 'express';
import monsters from '../controllers/monsters.js';

const router = express.Router();

router.get('/monsters', monsters.getAll);

export default router;
