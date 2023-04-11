/* eslint-disable no-console */
/* eslint-disable no-fallthrough */

import xpThresholdssByCharLevel from './data/xpThresholdsByCharLevel.json';
import xpByChallengeRating from './data/xpByChallengeRating.json';

const xpMultiplier = (xp, numCharacters) => {
    let totalXP = xp;

    if (numCharacters < 3) {
        totalXP *= 1.5;
    }

    if (numCharacters > 5) {
        totalXP *= 0.5;
    }

    return totalXP;
};

const convertToFloat = (value) => {
    const split = value.split('/');
    return split.reduce((n, d) => n / d);
};

const getClosestChallengeRating = (data, targetRange, numCharacters) => {
    let start = 0;
    let end = data.length - 1;
    let middle;
    let testValue;
    let closestCR = null;
    let lastMiddle;

    while (start < end && closestCR === null) {
        // Update middle value
        middle = Math.floor((start + end) / 2);
        if (middle === lastMiddle) {
            // Prevent infinite loop
            break;
        }
        lastMiddle = middle;

        // Get test value
        testValue = xpMultiplier(data[middle].XP, numCharacters);

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

    return closestCR;
};

export const isValidChallengeRating = ({ challengeRating }) => {
    // Convert from string for comparison purposes
    const numericCR = convertToFloat(challengeRating);

    if (numericCR >= 0 && numericCR <= 30) {
        return true;
    }
    return false;
};

export const calculateChallengeRating = (numCharacters, level, difficulty) => {
    if (level > 20 || level < 1) {
        console.error(
            `Error: Cannot calculate Challenge Rating - Invalid character level: ${level}`,
        );
        return null;
    }

    if (numCharacters < 1 || numCharacters > 10) {
        console.error(
            `Error: Cannot calculate Challenge Rating - Invalid number of characters: ${numCharacters}`,
        );
        return null;
    }

    // Determine XP Threshold for character level by difficulty
    const diff = xpThresholdssByCharLevel.level[level - 1].difficulty;

    // Get XP Thresholds [min, max] for difficulty
    let xpThresholds;

    switch (difficulty) {
        case 'Easy':
            xpThresholds = [diff.easy, diff.medium];
            break;
        case 'Medium':
            xpThresholds = [diff.medium, diff.hard];
            break;
        case 'Hard':
            xpThresholds = [diff.hard, diff.deadly];
            break;
        case 'Deadly':
            xpThresholds = [diff.deadly, diff.max];
            break;
        default:
            xpThresholds = null;
    }

    if (xpThresholds === null) {
        console.error(
            `Error: Cannot calculate Challenge Rating - Invalid difficulty ${difficulty}`,
        );
        return null;
    }

    // Determine the total party thresholds
    const partyXPThresholds = [numCharacters * xpThresholds[0], numCharacters * xpThresholds[1]];

    // Convert JSON to array keeping original order
    const xpByChallengeRatingArray = Object.keys(xpByChallengeRating).map(
        (key) => xpByChallengeRating[key],
    );

    // Return the closest Challenge Rating based on range
    return getClosestChallengeRating(xpByChallengeRatingArray, partyXPThresholds, numCharacters);
};
