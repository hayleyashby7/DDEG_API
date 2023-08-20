import app from '../app';
import supertest from 'supertest';
import monstersService from '../services/monsters';
import { authenticateUser } from '../middleware/auth';

jest.mock('../services/monsters');
jest.mock('../middleware/auth');

beforeAll(async () => {
    jest.resetAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});

const mockMonsters = [
    {
        id: 1,
        name: 'Aboleth',
        size_id: 3,
        type_id: 1,
        alignment: 'lawful evil',
        armor_class: 17,
        armor_desc: 'natural armor',
        challenge_rating: 10,
        hit_points: 135,
        hit_dice: '18d10+36',
    },
    {
        id: 80,
        name: 'Deva',
        size_id: 4,
        type_id: 13,
        alignment: 'any alignment',
        armor_class: 17,
        armor_desc: null,
        challenge_rating: 10,
        hit_points: 136,
        hit_dice: '16d8+64',
    },
];

// Test GET /api/monsters
describe('GET /api/monsters', () => {
    describe('when challenge rating passed as a query parameter', () => {
        test('should return with a 200 status code', async () => {
            // Arrange
            monstersService.getByChallengeRating.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challengeRating=10');

            // Assert
            expect(response.statusCode).toBe(200);
        });

        test('should specify JSON in the content type header', async () => {
            // Arrange
            monstersService.getByChallengeRating.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challengeRating=10');

            // Assert
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });

        test('should get the monsters with the given challenge rating', async () => {
            // Arrange
            const challengeRating = 10;
            monstersService.getByChallengeRating.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get(
                `/api/monsters?challengeRating=${challengeRating}`,
            );

            // Assert
            expect(response.body[0].challenge_rating).toEqual(challengeRating);
        });

        test('should respond with a json object that contains an array of monsters', async () => {
            // Arrange
            monstersService.getByChallengeRating.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challengeRating=10');

            // Assert
            expect(response.body).toEqual(expect.any(Array));
            expect(response.body.length).toBeGreaterThan(0);
        });
    });

    describe('when challenge rating is not passed as a query parameter', () => {
        test('should return with a 200 status code', async () => {
            // Arrange
            monstersService.getAllMonsters.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters');

            // Assert
            expect(response.statusCode).toBe(200);
        });

        test('should specify JSON in the content type header', async () => {
            // Arrange
            monstersService.getAllMonsters.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters');

            // Assert
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        });
        test('should respond with a json object that contains an array of monsters', async () => {
            // Arrange
            monstersService.getAllMonsters.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get(`/api/monsters`);

            // Assert
            expect(response.body).toEqual(expect.any(Array));
            expect(response.body.length).toBeGreaterThan(0);
        });
    });
});
