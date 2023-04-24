import express from 'express';
import getMonsters from '../controllers/monstersController';

const router = express.Router();

router.get('/', getMonsters);

export default router;
