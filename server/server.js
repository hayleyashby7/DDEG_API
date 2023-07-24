import app from './app.js';
import { config } from 'dotenv';
import db from './services/db.js';

// Load environment variables
config({ path: './config/config.env' });

// Set PORT
const PORT = process.env.PORT || 5000;

// Connect to database
const connect = async () => {
    console.log('Connecting to database...');
    try {
        await db;
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
connect();

// Listen to PORT
app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
