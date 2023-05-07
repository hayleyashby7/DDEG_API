import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Load environment variables
config({ path: './config/config.env' });

export default new Sequelize(process.env.DB_URI);
