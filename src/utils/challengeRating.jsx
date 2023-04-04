const isValidChallengeRating = ({ challengeRating }) => {
    if (challengeRating > 0 && challengeRating < 30) {
        return true;
    }
    return false;
};

export default isValidChallengeRating;
