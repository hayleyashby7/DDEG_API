import { Difficulty } from '../types/difficulty.types';
import { EncounterRequest } from '../types/encounter.types';
import * as challengeRating from './challenge_rating';
import { mockEncounterRequest, mockXPChallengeRating, mockXpRange } from '../mocks/mockData';

describe('validEncounterRequest', () => {
    test('returns true if valid request provided', () => {
        const request: EncounterRequest = {
            characters: 1,
            level: 1,
            difficulty: 'Easy',
        };

        expect(challengeRating.validEncounterRequest(request)).toBe(true);
    });

    test('returns false if less that 1 character provided', () => {
        const request: EncounterRequest = {
            characters: 0,
            level: 1,
            difficulty: 'Easy',
        };

        expect(challengeRating.validEncounterRequest(request)).toBe(false);
    });

    test('returns false if more that 20 characters provided', () => {
        const request: EncounterRequest = {
            characters: 21,
            level: 1,
            difficulty: 'Easy',
        };

        expect(challengeRating.validEncounterRequest(request)).toBe(false);
    });

    test('returns false if level too low', () => {
        const request: EncounterRequest = {
            characters: 1,
            level: 0,
            difficulty: 'Easy',
        };

        expect(challengeRating.validEncounterRequest(request)).toBe(false);
    });

    test('returns false if level too high', () => {
        const request: EncounterRequest = {
            characters: 1,
            level: 21,
            difficulty: 'Easy',
        };

        expect(challengeRating.validEncounterRequest(request)).toBe(false);
    });
});

describe('xpMultiplier', () => {
    test('returns 1 if 3-5 characters', () => {
        expect(challengeRating.xpMultiplier(100, 4)).toBe(100);
    });

    test('returns 1.5 if less than 3characters', () => {
        expect(challengeRating.xpMultiplier(100, 2)).toBe(150);
    });

    test('returns 0.5 if more than 5 characters', () => {
        expect(challengeRating.xpMultiplier(100, 6)).toBe(50);
    });
});

describe('xpRangeForLevel', () => {
    test('returns correct range for level 1', () => {
        expect(challengeRating.xpRangeForLevel(1)).toEqual({
            easy: 25,
            medium: 50,
            hard: 75,
            deadly: 100,
            max: 200,
        });
    });

    test('returns correct range for level 20', () => {
        expect(challengeRating.xpRangeForLevel(20)).toEqual({
            easy: 2800,
            medium: 5700,
            hard: 8500,
            deadly: 12700,
            max: 25400,
        });
    });

    test('returns highest possible range if level above max', () => {
        expect(challengeRating.xpRangeForLevel(30)).toEqual({
            easy: 2800,
            medium: 5700,
            hard: 8500,
            deadly: 12700,
            max: 25400,
        });
    });

    test('returns lowest possible range if level below min', () => {
        expect(challengeRating.xpRangeForLevel(0)).toEqual({
            easy: 25,
            medium: 50,
            hard: 75,
            deadly: 100,
            max: 200,
        });
    });
});

describe('xpRangeByDifficulty', () => {
    test('returns correct range for easy', () => {
        const range = challengeRating.xpRangeByDifficulty(
            'Easy',
            challengeRating.xpRangeForLevel(1),
        );
        expect(range).toEqual([25, 50]);
    });

    test('returns correct range for medium', () => {
        const range = challengeRating.xpRangeByDifficulty(
            'Medium',
            challengeRating.xpRangeForLevel(1),
        );
        expect(range).toEqual([50, 75]);
    });

    test('returns correct range for hard', () => {
        const range = challengeRating.xpRangeByDifficulty(
            'Hard',
            challengeRating.xpRangeForLevel(1),
        );
        expect(range).toEqual([75, 100]);
    });

    test('returns correct range for deadly', () => {
        const range = challengeRating.xpRangeByDifficulty(
            'Deadly',
            challengeRating.xpRangeForLevel(1),
        );
        expect(range).toEqual([100, 200]);
    });

    test('returns default easy range for invalid difficulty', () => {
        const range = challengeRating.xpRangeByDifficulty(
            'Invalid' as unknown as Difficulty,
            challengeRating.xpRangeForLevel(1),
        );
        expect(range).toEqual([25, 25]);
    });
});

describe('xpRangeForParty', () => {
    test('returns correct range for single character', () => {
        expect(challengeRating.xpRangeForParty(1, [25, 50])).toEqual([25, 50]);
    });

    test('returns correct range for multiple characters', () => {
        expect(challengeRating.xpRangeForParty(3, [25, 50])).toEqual([75, 150]);
    });

    test('returns unmodified range if invalid number of characters provided', () => {
        expect(challengeRating.xpRangeForParty(100, [25, 50])).toEqual([25, 50]);
    });

    test('returns unmodified range if invalid range provided', () => {
        expect(challengeRating.xpRangeForParty(1, [50, 25])).toEqual([50, 25]);
    });
});

describe('getClosestChallengeRating', () => {
    test('returns the closest whole challenge rating that fits encounter details', () => {
        expect(
            challengeRating.getClosestChallengeRating(mockXPChallengeRating, mockXpRange, 5),
        ).toBe('10');
    });

    test('returns the closest fractional challenge rating that fits encounter details', () => {
        expect(
            challengeRating.getClosestChallengeRating(mockXPChallengeRating, mockXpRange, 1),
        ).toBe('1/8');
    });

    test('returns the lowest closest challenge rating if range is too small', () => {
        expect(challengeRating.getClosestChallengeRating(mockXPChallengeRating, [1, 5], 1)).toBe(
            '1/8',
        );
    });

    test('returns the middle challenge rating if range is too large', () => {
        expect(
            challengeRating.getClosestChallengeRating(mockXPChallengeRating, [1600000, 200000], 5),
        ).toBe('10');
    });

    test('returns null if cannot find a challenge rating that fits encounter details', () => {
        expect(challengeRating.getClosestChallengeRating([], [1, 5], -5)).toBe(null);
    });
});

describe('calculateChallengeRating', () => {
    test('returns the correct challenge rating for a given encounter', () => {
        expect(challengeRating.calculateChallengeRating(mockEncounterRequest)).toBe('9');
    });

    test('returns null if the requested encounter is invalid', () => {
        expect(
            challengeRating.calculateChallengeRating({
                characters: 0,
                level: 0,
                difficulty: 'Easy',
            }),
        ).toBe(null);
    });

    test('sends an error to the console if the requested encounter is invalid', () => {
        const spy = jest.spyOn(console, 'error');
        challengeRating.calculateChallengeRating({ characters: 0, level: 0, difficulty: 'Easy' });
        expect(spy).toHaveBeenCalledWith(
            'Error: Cannot calculate Challenge Rating - invalid request',
        );
    });
});
