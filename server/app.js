import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import morgan from 'morgan';

// Load environment variables
config({ path: './config/config.env' });

// Initialise express
const app = express();

// Set CORS
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Developer logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/api/monsters', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Show all monsters',
    });
});

export default app;
