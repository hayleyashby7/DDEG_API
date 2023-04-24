import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import mongoose from 'mongoose';
import request from 'supertest';
import { config } from 'dotenv';
import app from '../app';

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
        const response = await request(app).get('/api/monsters');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('success', true);
    });
});

// Test GET /monsters/:challengeRating
describe('GET /api/monsters/:challengeRating', () => {
    it('should return 200 OK', async () => {
        const response = await request(app).get('/api/monsters/0');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('success', true);
    });
});
