import encounterService, { isValidEncounterRequest } from './encounter';
import monstersService from './monsters';
import { calculateChallengeRating, convertChallengeRatingToFloat } from '../utils/challenge_rating';
import {
    mockAllMonsters,
    mockChallengeRatingMonsters,
    mockEncounterRequest,
} from '../mocks/mockData';
import { Difficulty } from '../types/difficulty.types';

jest.mock('./monsters');
jest.mock('../utils/challenge_rating');

describe('isValidEncounterRequest', () => {
    test('when given a valid request should return true', () => {
        // Act
        const isValid = isValidEncounterRequest(mockEncounterRequest);

        // Assert
        expect(isValid).toEqual(true);
    });

    test('when given a request with not enough characters should return false', () => {
        // Arrange
        const mockInvalidEncounterRequest = {
            ...mockEncounterRequest,
            characters: 0,
        };

        // Act
        const isValid = isValidEncounterRequest(mockInvalidEncounterRequest);

        // Assert
        expect(isValid).toEqual(false);
    });

    test('when given a request with too many characters should return false', () => {
        // Arrange
        const mockInvalidEncounterRequest = {
            ...mockEncounterRequest,
            characters: 11,
        };

        // Act
        const isValid = isValidEncounterRequest(mockInvalidEncounterRequest);

        // Assert
        expect(isValid).toEqual(false);
    });

    test('when given a request with a level below minimum it should return false', () => {
        // Arrange
        const mockInvalidEncounterRequest = {
            ...mockEncounterRequest,
            level: 0,
        };

        // Act
        const isValid = isValidEncounterRequest(mockInvalidEncounterRequest);

        // Assert
        expect(isValid).toEqual(false);
    });

    test('when given a request with a level above maximum it should return false', () => {
        // Arrange
        const mockInvalidEncounterRequest = {
            ...mockEncounterRequest,
            level: 21,
        };

        // Act
        const isValid = isValidEncounterRequest(mockInvalidEncounterRequest);

        // Assert
        expect(isValid).toEqual(false);
    });

    test('when given a request with an invalid difficulty it should return false', () => {
        // Arrange
        const mockInvalidEncounterRequest = {
            ...mockEncounterRequest,
            difficulty: 'invalid' as unknown as Difficulty,
        };

        // Act
        const isValid = isValidEncounterRequest(mockInvalidEncounterRequest);

        // Assert
        expect(isValid).toEqual(false);
    });
});

describe('encounterService', () => {
    describe('generateEncounter', () => {
        test('when given a valid request should return an encounter typed object', async () => {
            // Arrange
            (calculateChallengeRating as jest.Mock).mockReturnValueOnce('10');
            (convertChallengeRatingToFloat as jest.Mock).mockReturnValueOnce(10);
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );

            // Act
            const encounter = await encounterService.generateEncounter(mockEncounterRequest);

            // Assert
            expect(encounter.challengeRating).toEqual('10');
            expect(encounter.monsters).toEqual(mockChallengeRatingMonsters);
        });

        test('when challenge rating is not calculated for request, should return an encounter object with no challenge rating and an array of all monsters', async () => {
            // Arrange
            (calculateChallengeRating as jest.Mock).mockReturnValueOnce(null);
            (monstersService.getAllMonsters as jest.Mock).mockResolvedValueOnce(mockAllMonsters);

            // Act
            const encounter = await encounterService.generateEncounter(mockEncounterRequest);

            // Assert
            expect(encounter.challengeRating).toEqual(null);
            expect(encounter.monsters).toEqual(mockAllMonsters);
        });
        test('when request does not have a valid number of characters, should throw an error', async () => {
            // Arrange
            const mockInvalidEncounterRequest = {
                ...mockEncounterRequest,
                characters: 0,
            };

            // Act
            const encounter = encounterService.generateEncounter(mockInvalidEncounterRequest);

            // Assert
            await expect(encounter).rejects.toThrow(
                'Error: Cannot generate encounter - Invalid encounter request',
            );
        });

        test('when request does not have a valid character level, should throw an error', async () => {
            // Arrange
            const mockInvalidEncounterRequest = {
                ...mockEncounterRequest,
                characters: 0,
            };

            // Act
            const encounter = encounterService.generateEncounter(mockInvalidEncounterRequest);

            // Assert
            await expect(encounter).rejects.toThrow(
                'Error: Cannot generate encounter - Invalid encounter request',
            );
        });

        test('when request does not have a valid difficulty, should throw an error', async () => {
            // Arrange
            const mockInvalidEncounterRequest = {
                ...mockEncounterRequest,
                difficulty: 'invalid' as unknown as Difficulty,
            };

            // Act
            const encounter = encounterService.generateEncounter(mockInvalidEncounterRequest);

            // Assert
            await expect(encounter).rejects.toThrow(
                'Error: Cannot generate encounter - Invalid encounter request',
            );
        });

        test('when request is invalid, it should not attempt to calculate challenge rating or get monsters', async () => {
            // Arrange
            const mockInvalidEncounterRequest = {
                ...mockEncounterRequest,
                characters: 0,
            };
            (calculateChallengeRating as jest.Mock).mockReturnValueOnce('10');
            (convertChallengeRatingToFloat as jest.Mock).mockReturnValueOnce(10);
            (monstersService.getByChallengeRating as jest.Mock).mockResolvedValueOnce(
                mockChallengeRatingMonsters,
            );

            // Act
            const encounter = encounterService.generateEncounter(mockInvalidEncounterRequest);

            // Assert
            await expect(encounter).rejects.toThrow();
            expect(calculateChallengeRating).not.toHaveBeenCalled();
            expect(convertChallengeRatingToFloat).not.toHaveBeenCalled();
            expect(monstersService.getByChallengeRating).not.toHaveBeenCalled();
        });

        test('when challenge rating is calculated but cannot be converted to a float, should throw an error', async () => {
            // Arrange
            (calculateChallengeRating as jest.Mock).mockReturnValueOnce('invalid');
            (convertChallengeRatingToFloat as jest.Mock).mockReturnValueOnce(null);

            // Act
            const encounter = encounterService.generateEncounter(mockEncounterRequest);

            // Assert
            await expect(encounter).rejects.toThrow(
                'Error: Cannot generate encounter - Invalid challenge rating',
            );
        });
    });
});
