import app from '../app';
import supertest from 'supertest';
import { authenticateUser } from '../middleware/auth';
import encounterService from '../services/encounter';
import { mockEncounterRequest, mockEnounterResponse } from '../mocks/mockData';

jest.mock('../services/encounter');
jest.mock('../middleware/auth');

beforeAll(async () => {
    jest.resetAllMocks();
});

describe('POST /api/encounter', () => {
    describe('when a valid encounter request is passed as a body', () => {
        test('should return with a 200 status code', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(
                mockEnounterResponse,
            );
            //Act
            const response = await supertest(app).post('/api/encounter').send(mockEncounterRequest);

            // Assert
            expect(response.statusCode).toBe(200);
        });

        test('should call the encounter service with the request body', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(
                mockEnounterResponse,
            );

            //Act
            await supertest(app).post('/api/encounter').send(mockEncounterRequest);

            // Assert
            expect(encounterService.generateEncounter).toHaveBeenCalledWith(mockEncounterRequest);
        });

        test('should return response with a body of defined type Encounter', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(
                mockEnounterResponse,
            );

            //Act
            const response = await supertest(app).post('/api/encounter').send(mockEncounterRequest);

            // Assert
            expect(response.body.challengeRating).toEqual(mockEnounterResponse.challengeRating);
            expect(response.body.monsters).toEqual(mockEnounterResponse.monsters);
        });
    });

    describe('when no encounter request is passed as a body', () => {
        test('should return with a 400 status code', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            const response = await supertest(app).post('/api/encounter');

            // Assert
            expect(response.statusCode).toBe(400);
        });

        test('should not call the encounter service', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            await supertest(app).post('/api/encounter');

            // Assert
            expect(encounterService.generateEncounter).not.toHaveBeenCalled();
        });

        test('should return a body with an error message', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            const response = await supertest(app).post('/api/encounter');

            // Assert
            expect(response.body).toEqual({ error: 'No encounter request body provided' });
        });

        test('should return a body that is not type Encounter', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            const response = await supertest(app).post('/api/encounter');

            // Assert
            expect(response.body.challengeRating).not.toBeDefined();
            expect(response.body.monsters).not.toBeDefined();
        });
    });

    describe('when an invalid encounter request is passed as a body', () => {
        const invalidRequest = { request: 'Invalid Request' };
        test('should return with a 400 status code', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);
            //Act
            const response = await supertest(app).post('/api/encounter').send(invalidRequest);

            // Assert
            expect(response.statusCode).toBe(400);
        });

        test('should call the encounter service with the request body', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            await supertest(app).post('/api/encounter').send(invalidRequest);

            // Assert
            expect(encounterService.generateEncounter).toHaveBeenCalledWith(invalidRequest);
        });

        test('should return a body with an error message', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            const response = await supertest(app).post('/api/encounter').send(invalidRequest);

            // Assert
            expect(response.body).toEqual({ error: 'No encounter generated' });
        });

        test('should return a body that is not type Encounter', async () => {
            // Arrange
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            (encounterService.generateEncounter as jest.Mock).mockResolvedValueOnce(null);

            //Act
            const response = await supertest(app).post('/api/encounter').send(invalidRequest);

            // Assert
            expect(response.body.challengeRating).not.toBeDefined();
            expect(response.body.monsters).not.toBeDefined();
        });
    });
});
