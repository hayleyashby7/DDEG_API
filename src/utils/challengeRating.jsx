/* eslint-disable no-console */
import xpThresholdsByCharLevel from './data/xpThresholdsByCharLevel.json';

export const isValidChallengeRating = ({ challengeRating }) => {
    if (challengeRating > 0 && challengeRating < 30) {
        return true;
    }
    return false;
};

export const calculateChallengeRating = (level, difficulty) => {
    // Determine XP Thresholds

    // Determine the Party's XP Threshold

    // Set XP range based on XP Threshold and difficulty

    const diff = xpThresholdsByCharLevel.level[level - 1].difficulty;
    console.log(diff);

    let xp;

    switch (difficulty) {
        case 'Easy':
            xp = diff.easy;
            break;
        case 'Medium':
            xp = diff.medium;
            break;
        case 'Hard':
            xp = diff.hard;
            break;
        case 'Deadly':
            xp = diff.deadly;
            break;
        default:
            xp = null;
    }

    console.log(xp);
};
