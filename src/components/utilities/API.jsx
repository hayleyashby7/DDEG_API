export const getMonstersFromAPI = async (challengeRating) => {
	try {
		const response = await fetch(`https://api.open5e.com/monsters/?challenge_rating=${challengeRating}`);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error('Error fetching data', err);
	}
};
