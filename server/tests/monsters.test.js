import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import mongoose from 'mongoose';
import supertest from 'supertest';
import { config } from 'dotenv';
import app from '../app';

const requestWithSuperTest = supertest(app);

// Load environment variables
config({ path: './config/config.env' });

// Connect to DB before tests
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

// Disconnect from DB after tests
afterEach(async () => {
    await mongoose.connection.close();
});

// Test GET /monsters
describe('GET /api/monsters', () => {
    it('should return 200 OK', async () => {
        const res = await requestWithSuperTest.get('/api/monsters');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('success', true);
    });
});
