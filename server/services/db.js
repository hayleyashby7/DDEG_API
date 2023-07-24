import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: './config/config.env' });

const db = createClient(process.env.DB_URL, process.env.DB_KEY);

export default db;
