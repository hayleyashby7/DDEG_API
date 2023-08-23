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
        "name": "Aboleth",
        "size": "Large",
        "type": "Aberration",
        "alignment": "lawful evil",
        "armor_class": 17,
        "hit_points": 135,
        "hit_dice": "18d10 + 36",
        "speed": [
            {
                "movement_type": "swim",
                "range": 40
            },
            {
                "movement_type": "walk",
                "range": 10
            }
        ],
        "stats": [
            {
                "stat": "STR",
                "score": 21,
                "modifier": 5,
                "saving_throw": 0
            },
            {
                "stat": "DEX",
                "score": 9,
                "modifier": -1,
                "saving_throw": 0
            },
            {
                "stat": "CON",
                "score": 15,
                "modifier": 2,
                "saving_throw": 6
            },
            {
                "stat": "INT",
                "score": 18,
                "modifier": 4,
                "saving_throw": 8
            },
            {
                "stat": "WIS",
                "score": 15,
                "modifier": 2,
                "saving_throw": 6
            },
            {
                "stat": "CHA",
                "score": 18,
                "modifier": 4,
                "saving_throw": 0
            }
        ],
        "skills": [
            {
                "skill": "History",
                "score": 12
            },
            {
                "skill": "Perception",
                "score": 10
            }
        ],
        "senses": [
            {
                "sense": "Darkvision",
                "value": "120ft"
            },
            {
                "sense": "Passive Perception",
                "value": "20"
            }
        ],
        "languages": [
            {
                "language": "Deep Speech",
                "range": ""
            },
            {
                "language": "Telepathy",
                "range": "120 ft"
            }
        ],
        "language_desc": "",
        "challenge_rating": 10,
        "traits": [
            {
                "trait": "<p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>"
            }
        ],
        "actions": [
            {
                "action": "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
                "legendary_actions": "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
                "reactions": ""
            }
        ]
    },
    {
        "name": "Deva",
        "size": "Medium",
        "type": "Celestial",
        "alignment": "lawful good",
        "armor_class": 17,
        "hit_points": 136,
        "hit_dice": "16d8 + 64",
        "speed": [
            {
                "movement_type": "fly",
                "range": 90
            },
            {
                "movement_type": "walk",
                "range": 30
            }
        ],
        "stats": [
            {
                "stat": "STR",
                "score": 18,
                "modifier": 4,
                "saving_throw": 0
            },
            {
                "stat": "DEX",
                "score": 18,
                "modifier": 4,
                "saving_throw": 0
            },
            {
                "stat": "CON",
                "score": 18,
                "modifier": 4,
                "saving_throw": 0
            },
            {
                "stat": "INT",
                "score": 17,
                "modifier": 3,
                "saving_throw": 0
            },
            {
                "stat": "WIS",
                "score": 20,
                "modifier": 5,
                "saving_throw": 9
            },
            {
                "stat": "CHA",
                "score": 20,
                "modifier": 5,
                "saving_throw": 9
            }
        ],
        "skills": [
            {
                "skill": "Insight",
                "score": 9
            },
            {
                "skill": "Perception",
                "score": 9
            }
        ],
        "senses": [
            {
                "sense": "Darkvision",
                "value": "120ft"
            },
            {
                "sense": "Passive Perception",
                "value": "19"
            }
        ],
        "languages": [
            {
                "language": "Telepathy",
                "range": "120 ft"
            }
        ],
        "language_desc": "All",
        "challenge_rating": 10,
        "traits": [
            {
                "trait": "<p><em><strong>Angelic Weapons.</strong></em> The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack). </p><p><em><strong>Innate Spellcasting.</strong></em> The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: </p><p>At will: detect evil and good </p><p>1/day each: commune, raise dead </p><p><em><strong>Magic Resistance.</strong></em> The deva has advantage on saving throws against spells and other magical effects.</p>"
            }
        ],
        "actions": [
            {
                "action": "<p><em><strong>Multiattack.</strong></em> The deva makes two melee attacks. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage. </p><p><em><strong>Healing Touch (3/Day).</strong></em> The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness. </p><p><em><strong>Change Shape.</strong></em> The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>",
                "legendary_actions": "",
                "reactions": ""
            }
        ]
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
                name: mockMonsters[0].name,
                size: mockMonsters[0].size,
                type: mockMonsters[0].type,
                alignment: mockMonsters[0].alignment,
                armor_class: mockMonsters[0].armor_class,
                hit_points: mockMonsters[0].hit_points,
                hit_dice: mockMonsters[0].hit_dice,
                speed: mockMonsters[0].speed,
                stats: mockMonsters[0].stats,
                skills: mockMonsters[0].skills,
                damage_immunities: mockMonsters[0].damage_immunities,
                damage_resistances: mockMonsters[0].damage_resistances,
                damage_vulnerabilities: mockMonsters[0].damage_vulnerabilities,
                condition_immunities: mockMonsters[0].condition_immunities,
                senses: mockMonsters[0].senses,
                languages: mockMonsters[0].languages,
                language_desc: mockMonsters[0].language_desc,
                challenge_rating: mockMonsters[0].challenge_rating,
                traits: mockMonsters[0].traits,
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
