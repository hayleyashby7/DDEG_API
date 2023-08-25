import xpChallengeRatings from '../data/xpByChallengeRating.json';
import xpThresholds from '../data/xpThresholdsByCharLevel.json';
import { Difficulty } from '../types/difficulty.types';
import { ExpRange, XPChallengeRating } from '../types/challenge_rating.types';
import { EncounterRequest } from '../types/encounter.types';

const validEncounterRequest = (EncounterRequest: EncounterRequest): boolean => {
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

const xpMultiplier = (xp: number, characters: number) => {
    let totalXP = xp;

    if (characters < 3) {
        totalXP *= 1.5;
    }

    if (characters > 5) {
        totalXP *= 0.5;
    }

    return totalXP;
};

const convertToFloat = (value: string) => {
    const [numerator, denominator] = value.split('/');
    return parseFloat(numerator) / parseFloat(denominator);
};

const isValidChallengeRating = (challengeRating: string) => {
    const challengeRatingNumber = convertToFloat(challengeRating);
    return challengeRatingNumber >= 0 && challengeRatingNumber <= 30;
};

const xpRangeForLevel = (level: number): ExpRange => xpThresholds.level[level - 1].difficulty;

const xpRangeByDifficulty = (difficulty: Difficulty, LevelRange: ExpRange): number[] => {
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

const xpRangeForParty = (characters: number, xpRange: number[]): number[] => [
    characters * xpRange[0],
    characters * xpRange[1],
];

const xpByChallengeRating: XPChallengeRating[] = Object.values(xpChallengeRatings);

const getClosestChallengeRating = (
    data: XPChallengeRating[],
    targetRange: number[],
    characters: number,
): number | null => {
    let start = 0;
    let end = data.length - 1;
    let middle = 0;
    let testValue = 0;
    let closestCR = null;
    let lastMiddle = 0;

    while (start <= end && closestCR === null) {
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
                console.error('Error: Cannot calculate Challenge Rating - defaulting to CR 0');
                closestCR = 0;
                break;
        }
    }

    if (closestCR === null) {
        // No exact match, return the nearest value
        if (testValue > targetRange[1]) {
            closestCR = data[middle - 1].CR;
        } else {
            closestCR = data[middle].CR;
        }
    }

    return closestCR as number;
};

export const calculateChallengeRating = (EncounterRequest: EncounterRequest): number | null => {
    const { characters, level, difficulty } = EncounterRequest;
    const challengeRating: number | null = null;

    if (!validEncounterRequest(EncounterRequest)) {
        console.error('Error: Cannot calculate Challenge Rating - invalid request');
        return challengeRating;
    }

    return getClosestChallengeRating(
        xpByChallengeRating,
        xpRangeForParty(characters, xpRangeByDifficulty(difficulty, xpRangeForLevel(level))),
        characters,
    );
};
