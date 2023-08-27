import xpChallengeRatings from '../files/xpByChallengeRating.json';
import xpThresholds from '../files/xpThresholdsByCharLevel.json';
import { Difficulty } from '../types/difficulty.types';
import { ExpRange, XPChallengeRating } from '../types/challenge_rating.types';
import { EncounterRequest } from '../types/encounter.types';

export const validEncounterRequest = (EncounterRequest: EncounterRequest): boolean => {
    const { characters, level, difficulty } = EncounterRequest;

    if (!characters || !level || !difficulty) {
        return false;
    }

    if (characters < 1 || characters > 20) {
        return false;
    }

    if (level < 1 || level > 20) {
        return false;
    }

    return true;
};

export const xpMultiplier = (xp: number, characters: number) => {
    let totalXP = xp;

    if (characters < 3) {
        totalXP *= 1.5;
    }

    if (characters > 5) {
        totalXP *= 0.5;
    }

    return totalXP;
};

export const xpRangeForLevel = (level: number): ExpRange => {
    if (level < 1) return xpThresholds.level[0].difficulty;
    if (level > 20) return xpThresholds.level[19].difficulty;
    return xpThresholds.level[level - 1].difficulty;
};

export const xpRangeByDifficulty = (difficulty: Difficulty, LevelRange: ExpRange): number[] => {
    switch (difficulty) {
        case 'Easy':
            return [LevelRange.easy, LevelRange.medium];
        case 'Medium':
            return [LevelRange.medium, LevelRange.hard];
        case 'Hard':
            return [LevelRange.hard, LevelRange.deadly];
        case 'Deadly':
            return [LevelRange.deadly, LevelRange.max];
        default:
            return [LevelRange.easy, LevelRange.easy];
    }
};

export const xpRangeForParty = (characters: number, xpRange: number[]): number[] => {
    if (characters < 1 || characters > 20) return xpRange;
    if (xpRange[0] > xpRange[1]) return xpRange;

    return [characters * xpRange[0], characters * xpRange[1]];
};

const xpByChallengeRating: XPChallengeRating[] = Object.values(xpChallengeRatings);

export const getClosestChallengeRating = (
    data: XPChallengeRating[],
    targetRange: number[],
    characters: number,
): string | null => {
    let start = 0;
    let end = data.length - 1;
    let middle = 0;
    let testValue = 0;
    1;
    let closestCR = '';
    let lastMiddle = 0;

    if (data.length === 0 || targetRange.length !== 2) return null;

    while (start <= end && closestCR === '') {
        // Update middle value
        middle = Math.floor((start + end) / 2);

        if (middle === lastMiddle) {
            // Prevent infinite loop
            break;
        }

        lastMiddle = middle;

        testValue = xpMultiplier(data[middle].XP, characters);

        switch (true) {
            case testValue >= targetRange[1]:
                // Value is above range - continue search
                end = middle + 1;
                break;

            case testValue < targetRange[0]:
                // Value is below range - continue search
                start = middle - 1;
                break;

            case testValue === targetRange[0] || testValue === targetRange[1] - 1:
            // Exact match - fall through
            case testValue > targetRange[0] && testValue < targetRange[1]:
                // Value is within range
                closestCR = data[middle].CR;
                break;

            default:
                // Error if reached here
                return null;
        }
    }

    if (closestCR === '') {
        // No exact match, return the nearest value
        if (testValue > targetRange[1]) {
            closestCR = data[middle - 1].CR;
        } else {
            closestCR = data[middle].CR;
        }
    }

    return closestCR;
};

export const calculateChallengeRating = (EncounterRequest: EncounterRequest): string | null => {
    const { characters, level, difficulty } = EncounterRequest;

    if (!validEncounterRequest(EncounterRequest)) {
        console.error('Error: Cannot calculate Challenge Rating - invalid request');
        return null;
    }

    return getClosestChallengeRating(
        xpByChallengeRating,
        xpRangeForParty(characters, xpRangeByDifficulty(difficulty, xpRangeForLevel(level))),
        characters,
    );
};
