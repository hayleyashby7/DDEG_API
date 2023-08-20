import app from '../app';
import supertest from 'supertest';
import { generateToken } from '../middleware/auth';

jest.mock('../middleware/auth');

beforeAll(async () => {
    jest.resetAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('POST /api/user', () => {
    describe('when username is provided', () => {
        test('should return with a 201 status code', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');
            const username = 'test-user';

            //Act
            const response = await supertest(app).post('/api/user').send({ username });

            // Assert
            expect(response.statusCode).toBe(201);
        });

        test('should specify JSON in the content type header', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');
            const username = 'test-user';

            //Act
            const response = await supertest(app).post('/api/user').send({ username });

            // Assert
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });

        test('should return a token in the response body', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');
            const username = 'test-user';

            //Act
            const response = await supertest(app).post('/api/user').send({ username });

            // Assert
            expect(response.body.token).toBe('test-token');
        });
    });

    describe('when username is not provided', () => {
        test('should return with a 400 status code', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');

            //Act
            const response = await supertest(app).post('/api/user');

            // Assert
            expect(response.statusCode).toBe(400);
        });

        test('should specify JSON in the content type header', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');

            //Act
            const response = await supertest(app).post('/api/user');

            // Assert
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });

        test('should return an error message in the response body', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');

            //Act
            const response = await supertest(app).post('/api/user');

            // Assert
            expect(response.body.message).toBe('Username is required');
        });

        test('should not call generateToken middleware', async () => {
            // Arrange
            generateToken.mockReturnValueOnce('test-token');

            //Act
            await supertest(app).post('/api/user');

            // Assert
            expect(generateToken).not.toHaveBeenCalled();
        });
    });
});
