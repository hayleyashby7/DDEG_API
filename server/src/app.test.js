import app from './app';
import supertest from 'supertest';

describe(`GET /`, () => {
    test(`should return with a 200 status code`, async () => {
        // Act
        const response = await supertest(app).get(`/`);

        // Assert
        expect(response.statusCode).toBe(200);
    });
});
