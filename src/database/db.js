import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env' });

const supabaseUrl = process.env.AUTH_DATABASE_URL;
const supabaseKey = process.env.AUTH_DATABASE_KEY;

export const db = new PrismaClient();

export const authDB = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });
