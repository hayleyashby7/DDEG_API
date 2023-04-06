export const getMonstersFromAPI = async ({ challengeRating }) => {
    try {
        const response = await fetch(
            `https://api.open5e.com/monsters/?challenge_rating=${challengeRating}`,
        );
        return await response.json();
    } catch (e) {
        throw new Error(e);
    }
};

export default getMonstersFromAPI;
