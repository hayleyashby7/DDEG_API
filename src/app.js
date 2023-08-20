import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes/routes.js';

// Load environment variables
config({ path: '.env' });

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
app.get('/', (req, res) => {
    res.status(200).json({ message: `DDEG API` });
});

app.use('/api', router);

export default app;
