export const getMonstersFromAPI = async (challengeRating) => {
	return fetch(`https://api.open5e.com/monsters/?challenge_rating=${challengeRating}`).then((response) => {
		if (response.status === 200) return response.json();
		else throw new Error('Error fetching data');
	});
};
