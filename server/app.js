import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/monsters.js';
import { config } from 'dotenv';
import './models';

// Load environment variables
config({ path: './config/config.env' });

// Initialise express
const app = express();

// Set CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Developer logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.get('/monsters', router);

export default app;
