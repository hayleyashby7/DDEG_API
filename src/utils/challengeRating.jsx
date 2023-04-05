/* eslint-disable no-console */
import xpThresholdsByCharLevel from './data/xpThresholdsByCharLevel.json';
import xpByChallengeRating from './data/xpByChallengeRating.json';

const xpMultiplier = (xp, numCharacters) => {
    let totalXP = xp;

    if (numCharacters < 3) {
        totalXP *= 1.5;
    }

    if (numCharacters > 5) {
        totalXP *= 0.5;
    }
    console.log(`Total XP: ${totalXP}`);

    return totalXP;
};

const getClosestChallengeRating = (data, targetValue, numCharacters) => {
    let start = 0;
    let end = data.length - 1;
    let middle = Math.floor((start + end) / 2);
    let testValue = xpMultiplier(data[middle].XP, numCharacters);

    while (testValue !== targetValue && start < end) {
        // Found matching value
        if (testValue === targetValue) {
            return data[middle].CR;
        }

        // Continue searching
        if (targetValue < testValue) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
        testValue = xpMultiplier(data[middle].XP, numCharacters);
    }

    // No exact match so use closest value below target
    return data[end].CR;
};

export const isValidChallengeRating = ({ challengeRating }) => {
    if (challengeRating >= 0 && challengeRating <= 30) {
        return true;
    }
    return false;
};

export const calculateChallengeRating = (numCharacters, level, difficulty) => {
    // Determine XP Threshold for character level by difficulty
    const diff = xpThresholdsByCharLevel.level[level - 1].difficulty;

    let xpThreshold;

    switch (difficulty) {
        case 'Easy':
            xpThreshold = diff.easy;
            break;
        case 'Medium':
            xpThreshold = diff.medium;
            break;
        case 'Hard':
            xpThreshold = diff.hard;
            break;
        case 'Deadly':
            xpThreshold = diff.deadly;
            break;
        default:
            xpThreshold = null;
    }

    // Determine the Party's XP Threshold
    const partyXPThreshold = numCharacters * xpThreshold;

    // Get CR based on XP Threshold
    const data = Object.keys(xpByChallengeRating).map((key) => xpByChallengeRating[key]);

    return getClosestChallengeRating(data, partyXPThreshold);
};
