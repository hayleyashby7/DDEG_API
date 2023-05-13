import app from '../app';
import supertest from 'supertest';
import db from '../services/db';
import { config } from 'dotenv';
import { beforeAll, afterAll, describe, test, expect } from '@jest/globals';

// Load environment variables
config({ path: './config/config.env' });

// Define challenge ratings
const challengeRatings = [
    0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 30,
];

// Before each test, connect to the database
beforeAll(async () => {
    try {
        await db.authenticate();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

// After each test has finished, close the database connection
afterAll(async () => {
    try {
        await db.close();
    } catch (error) {
        console.error('Unable to close the database connection:', error);
    }
});

// Test GET /monsters
describe('GET /monsters', () => {
    describe('given the challenge rating', () => {
        test('should return with a 200 status code', async () => {
            const response = await supertest(app).get('/monsters?challengeRating=1');
            expect(response.statusCode).toBe(200);
        });

        test('should specify JSON in the content type header', async () => {
            const response = await supertest(app).get('/monsters?challengeRating=1');
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });

        test('should get the monsters with the given challenge rating', async () => {
            const response = await supertest(app).get('/monsters?challengeRating=1');
            expect(response.body[0].challenge_rating).toEqual(1);
        });

        test('should respond with a json object that contains an array of monsters', async () => {
            const response = await supertest(app).get('/monsters?challengeRating=1');
            expect(response.body).toEqual(expect.any(Array));
            expect(response.body.length).toBeGreaterThan(0);
        });

        test('should respond with a json object that contains an array of monsters with the correct properties', async () => {
            const response = await supertest(app).get('/monsters?challengeRating=1');
            expect(response.body[0].id).toBeDefined();
            expect(response.body[0].name).toBeDefined();
            expect(response.body[0].size_id).toBeDefined();
            expect(response.body[0].type_id).toBeDefined();
            expect(response.body[0].alignment).toBeDefined();
            expect(response.body[0].armor_class).toBeDefined();
            expect(response.body[0].armor_desc).toBeDefined();
            expect(response.body[0].challenge_rating).toBeDefined();
            expect(response.body[0].hit_points).toBeDefined();
            expect(response.body[0].hit_dice).toBeDefined();
            expect(response.body[0].speed_id).toBeDefined();
        });
    });

    describe('when the challenge rating is not provided', () => {
        test('should return with a 200 status code', async () => {
            const response = await supertest(app).get('/monsters');
            expect(response.statusCode).toBe(200);
        });

        test('should specify JSON in the content type header', async () => {
            const response = await supertest(app).get('/monsters');
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });

        test('should respond with a json object that contains an array of monsters', async () => {
            const response = await supertest(app).get('/monsters');
            expect(response.body).toEqual(expect.any(Array));
            expect(response.body.length).toBeGreaterThan(0);
        });

        test('should respond with a json object that contains an array of monsters with the correct properties', async () => {
            const response = await supertest(app).get('/monsters');
            expect(response.body[0].id).toBeDefined();
            expect(response.body[0].name).toBeDefined();
            expect(response.body[0].size_id).toBeDefined();
            expect(response.body[0].type_id).toBeDefined();
            expect(response.body[0].alignment).toBeDefined();
            expect(response.body[0].armor_class).toBeDefined();
            expect(response.body[0].armor_desc).toBeDefined();
            expect(response.body[0].challenge_rating).toBeDefined();
            expect(response.body[0].hit_points).toBeDefined();
            expect(response.body[0].hit_dice).toBeDefined();
            expect(response.body[0].speed_id).toBeDefined();
        });
    });
});
