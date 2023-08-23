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
        language_desc: '',
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
        actions: [
            {
                actions:
                    "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
                legendary_actions:
                    "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
                reactions: '',
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
        actions: [
            {
                actions:
                    "<p><em><strong>Multiattack.</strong></em> The deva makes two melee attacks. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage. </p><p><em><strong>Healing Touch (3/Day).</strong></em> The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness. </p><p><em><strong>Change Shape.</strong></em> The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>",
                legendary_actions: '',
                reactions: '',
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
                actions: mockMonsters[0].actions,
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
