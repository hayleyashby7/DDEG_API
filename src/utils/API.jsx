/* eslint-disable import/no-extraneous-dependencies */
import fetch from 'node-fetch';

export const getMonstersFromAPI = async ({ challengeRating = 3 }) => {
    try {
        const response = await fetch(
            `https://api.open5e.com/monsters/?challenge_rating=${challengeRating}`,
        );
        const data = await response.json();
        return data;
    } catch (e) {
        return null;
    }
};

export default getMonstersFromAPI;
