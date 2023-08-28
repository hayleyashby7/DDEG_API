import monstersService, { monster_request } from './monsters';
import { dbMock } from '../mocks/mockDB';
import {
    mockAllMonsters,
    mockChallengeRatingMonsters,
    mockDBAllMonsters,
    mockDBMonstersByChallengeRating,
} from '../mocks/mockData';
import { isMonster } from '../types/monster.types';

describe('monstersService', () => {
    describe('getByChallengeRating', () => {
        test('should call the database with the correct challenge rating and query', async () => {
            // Arrange
            const challengeRating = 10;
            dbMock.monsters.findMany.mockResolvedValueOnce(mockDBMonstersByChallengeRating);

            // Act
           await monstersService.getByChallengeRating(challengeRating);

            // Assert
            expect(dbMock.monsters.findMany).toHaveBeenCalledWith({
                where: {
                    challenge_rating: challengeRating,
                },
                include: monster_request,
            });
        });
        test('should return an array of monsters matching the challenge rating', async () => {
            // Arrange
            const challengeRating = 10;
            dbMock.monsters.findMany.mockResolvedValueOnce(mockDBMonstersByChallengeRating);

            // Act
            const monsters = await monstersService.getByChallengeRating(challengeRating);

            // Assert
            monsters.map((monster) => expect(monster.challenge_rating).toEqual(challengeRating));
        });

        test('should return an array of the defined type Monster', async () => {
            // Arrange
            const challengeRating = 10;
            dbMock.monsters.findMany.mockResolvedValueOnce(mockDBMonstersByChallengeRating);

            // Act
            const monsters = await monstersService.getByChallengeRating(challengeRating);

            // Assert
            expect(monsters).toEqual(mockChallengeRatingMonsters);
            monsters.map((monster) => expect(isMonster(monster)).toBe(true));
        });
    });

    describe('getAllMonsters', () => {
        test('should call the database with the correct query', async () => {
            // Arrange
            dbMock.monsters.findMany.mockResolvedValueOnce(mockDBAllMonsters);

            // Act
            await monstersService.getAllMonsters();

            // Assert
            expect(dbMock.monsters.findMany).toHaveBeenCalledWith({
                include: monster_request,
            });
        });

        test('should return an array of monsters with different challenge ratings', async () => {
            // Arrange
            dbMock.monsters.findMany.mockResolvedValueOnce(mockDBAllMonsters);

            // Act
            const monsters = await monstersService.getAllMonsters();

            const multipleRatings =
                new Set(monsters.map((monster) => monster.challenge_rating)).size > 1;

            // Assert
            expect(multipleRatings).toBe(true);
        });

        test('should return an array of the defined type Monster', async () => {
            // Arrange
            dbMock.monsters.findMany.mockResolvedValueOnce(mockDBAllMonsters);

            // Act
            const monsters = await monstersService.getAllMonsters();

            // Assert
            expect(monsters).toEqual(mockAllMonsters);
            monsters.map((monster) => expect(isMonster(monster)).toBe(true));
        });
    });
});
