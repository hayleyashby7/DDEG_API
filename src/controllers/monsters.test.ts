import app from '../app';
import supertest from 'supertest';
import monstersService from '../services/monsters';
import { authenticateUser } from '../middleware/auth';
import { mockAllMonsters, mockChallengeRatingMonsters } from '../mocks/mockData';
import { Monster, isMonster } from '../types/monster.types';

jest.mock('../services/monsters');
jest.mock('../middleware/auth');

beforeAll(async () => {
    jest.resetAllMocks();
});

// Test GET /api/monsters
describe('GET /api/monsters', () => {
    describe('when challenge rating passed as a query parameter', () => {
        test('should return with a 200 status code', async () => {
            // Arrange
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challenge_rating=10');

            // Assert
            expect(response.statusCode).toBe(200);
        });

        test('should specify JSON in the content type header', async () => {
            // Arrange
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challenge_rating=10');

            // Assert
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });

        test('should get the monsters with the given challenge rating', async () => {
            // Arrange
            const challengeRating = 10;
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get(
                `/api/monsters?challenge_rating=${challengeRating}`,
            );

            // Assert
            response.body.map((monster: Monster) =>
                expect(monster.challenge_rating).toEqual(challengeRating),
            );
        });

        test('should respond with a json object that contains an array of monsters', async () => {
            // Arrange
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challenge_rating=10');
            const monsters = response.body;

            // Assert
            monsters.map((monster: unknown) => expect(isMonster(monster)).toBe(true));
        });

        test('should return monster array with expected values', async () => {
            // Arrange
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            await supertest(app).get('/api/monsters?challenge_rating=10');

            // Assert
        });

        test('should return with a 404 status code if no monsters are found', async () => {
            // Arrange
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(null);
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challenge_rating=20');

            // Assert
            expect(response.statusCode).toBe(404);
        });
    });

    describe('when challenge rating is not passed as a query parameter', () => {
        test('should return with a 200 status code', async () => {
            // Arrange
            (monstersService.getAllMonsters as jest.Mock).mockResolvedValueOnce(mockAllMonsters);
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters');

            // Assert
            expect(response.statusCode).toBe(200);
        });

        test('should specify JSON in the content type header', async () => {
            // Arrange
            (monstersService.getAllMonsters as jest.Mock).mockResolvedValueOnce(mockAllMonsters);
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters');

            // Assert
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });
        test('should respond with a json object that contains an array of monsters', async () => {
            // Arrange
            (monstersService.getAllMonsters as jest.Mock).mockResolvedValueOnce(mockAllMonsters);
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get(`/api/monsters`);
            const monsters = response.body;

            // Assert
            monsters.map((monster: unknown) => expect(isMonster(monster)).toBe(true));
        });

        test('should return with a 404 status code if no monsters are found', async () => {
            // Arrange
            (monstersService.getAllMonsters as jest.Mock).mockResolvedValueOnce(null);
            (authenticateUser as jest.Mock).mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challenge_rating=20');

            // Assert
            expect(response.statusCode).toBe(404);
        });
    });
});
