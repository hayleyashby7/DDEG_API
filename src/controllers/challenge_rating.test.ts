import app from '../app';
import supertest from 'supertest';
import { EncounterRequest } from '../types/encounter.types';
import { authenticateUser } from '../middleware/auth';

jest.mock('../middleware/auth');

beforeAll(async () => {
    jest.resetAllMocks();
});

describe('POST /api/challenge_rating', () => {
    describe('when encounter request is passed as a body', () => {
        test('should return with a 200 status code', async () => {
            // Arrange
            const encounterRequest: EncounterRequest = {
                characters: 5,
                level: 5,
                difficulty: 'Medium',
            };
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            //Act
            const response = await supertest(app)
                .post('/api/challenge_rating')
                .send(encounterRequest);

            // Assert
            expect(response.statusCode).toBe(200);
        });

        test('should return the correct challenge rating', async () => {
            // Arrange
            const encounterRequest: EncounterRequest = {
                characters: 5,
                level: 3,
                difficulty: 'Easy',
            };
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());
            //Act
            const response = await supertest(app)
                .post('/api/challenge_rating')
                .send(encounterRequest);

            // Assert
            expect(response.body.challengeRating).toBe("3");
        });
    });
});
