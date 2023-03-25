import React from 'react';
import { useEffect, useState } from 'react';
import { getMonstersFromAPI } from './utilities/API';

const Encounter = ({ challengeRating = 3 }) => {
	const [monsters, setMonsters] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getMonstersFromAPI(challengeRating);
				if (!ignore) {
					if (data.count > 0) {
						setMonsters(data.results);
					} else {
						setError(true);
					}
				}
			} catch (err) {
				setError(true);
			}
		};

		let ignore = false;
		fetchData();
		return () => {
			ignore = true;
		};
	}, [challengeRating]);

	const hasData = (data) => {
		if (data === undefined) return false;
		else return true;
	};

	return error ? (
		<p>Unable to retrieve data</p>
	) : (
		<ul>
			{monsters.map((monster) => (
				<li key={monster.slug}>{monster.name}</li>
			))}
		</ul>
	);
};

export default Encounter;
