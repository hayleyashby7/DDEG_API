import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env' });

// DDEG database via Prisma
export const db = new PrismaClient();

// Authentication database via supabase directly
const supabaseUrl = process.env.AUTH_DATABASE_URL || null;
const supabaseKey = process.env.AUTH_DATABASE_KEY || null;

if (supabaseUrl === null || supabaseKey === null) {
    throw new Error('Authentication database details are not defined');
}

export const authDB = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });
