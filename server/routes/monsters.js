import express from 'express';
import monsters from '../controllers/monsters.js';

const router = express.Router();

router.get('/monsters', monsters.get);

export default router;
