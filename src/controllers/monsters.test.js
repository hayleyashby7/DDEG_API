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
        size_id: 4,
        type_id: 1,
        alignment: 'lawful evil',
        armor_class: 17,
        armor_desc: 'Natural Armor',
        challenge_rating: 10,
        hit_points: 135,
        hit_dice: '18d10 + 36',
        language_desc: null,
        types: {
            type: 'Aberration',
        },
        sizes: {
            size: 'Large',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 21,
                modifier: 5,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 9,
                modifier: -1,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 18,
                modifier: 4,
                saving_throw: 8,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
        ],
        monster_languages: [
            {
                languages: {
                    name: 'Deep Speech',
                },
                range: '',
            },
            {
                languages: {
                    name: 'Telepathy',
                },
                range: '120 ft',
            },
        ],
        monster_senses: [
            {
                senses: {
                    sense: 'Darkvision',
                },
                value: '120ft',
            },
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '20',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'History',
                },
                score: 12,
            },
            {
                skills: {
                    skill: 'Perception',
                },
                score: 10,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'swim',
                },
                range: 40,
            },
            {
                speeds: {
                    speed: 'walk',
                },
                range: 10,
            },
        ],
    },
    {
        id: 80,
        name: 'Deva',
        size_id: 3,
        type_id: 13,
        alignment: 'lawful good',
        armor_class: 17,
        armor_desc: 'Natural Armor',
        challenge_rating: 10,
        hit_points: 136,
        hit_dice: '16d8 + 64',
        language_desc: 'All',
        types: {
            type: 'Celestial',
        },
        sizes: {
            size: 'Medium',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 17,
                modifier: 3,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 20,
                modifier: 5,
                saving_throw: 9,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 20,
                modifier: 5,
                saving_throw: 9,
            },
        ],
        monster_languages: [
            {
                languages: {
                    name: 'Telepathy',
                },
                range: '120 ft',
            },
        ],
        monster_senses: [
            {
                senses: {
                    sense: 'Darkvision',
                },
                value: '120ft',
            },
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '19',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'Insight',
                },
                score: 9,
            },
            {
                skills: {
                    skill: 'Perception',
                },
                score: 9,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'fly',
                },
                range: 90,
            },
            {
                speeds: {
                    speed: 'walk',
                },
                range: 30,
            },
        ],
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

        test('should return monster array with expected values', async () => {
            // Arrange
            monstersService.getByChallengeRating.mockResolvedValueOnce(mockMonsters);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challengeRating=10');

            // Assert
            expect(response.body[0]).toEqual({
                id: mockMonsters[0].id,
                name: mockMonsters[0].name,
                size_id: mockMonsters[0].size_id,
                type_id: mockMonsters[0].type_id,
                alignment: mockMonsters[0].alignment,
                armor_class: mockMonsters[0].armor_class,
                armor_desc: mockMonsters[0].armor_desc,
                challenge_rating: mockMonsters[0].challenge_rating,
                hit_points: mockMonsters[0].hit_points,
                hit_dice: mockMonsters[0].hit_dice,
                language_desc: mockMonsters[0].language_desc,
                types: mockMonsters[0].types,
                sizes: mockMonsters[0].sizes,
                monster_stats: mockMonsters[0].monster_stats,
                monster_languages: mockMonsters[0].monster_languages,
                monster_senses: mockMonsters[0].monster_senses,
                monster_skills: mockMonsters[0].monster_skills,
                monster_speeds: mockMonsters[0].monster_speeds,
            });
        });

        test('should return with a 404 status code if no monsters are found', async () => {
            // Arrange
            monstersService.getByChallengeRating.mockResolvedValueOnce(null);
            authenticateUser.mockImplementation((req, res, next) => next());

            //Act
            const response = await supertest(app).get('/api/monsters?challengeRating=10');

            // Assert
            expect(response.statusCode).toBe(404);
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
