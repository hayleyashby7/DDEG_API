import mongoose from 'mongoose';
import app from '../app';
import supertest from 'supertest';
const requestWithSuperTest = supertest(app);

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
