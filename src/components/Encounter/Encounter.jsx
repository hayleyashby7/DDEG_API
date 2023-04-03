import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMonstersFromAPI } from '../../utils/API';

function Encounter({ challengeRating = 3 }) {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMonstersFromAPI({ challengeRating });
                setMonsters(data.results);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [challengeRating]);

    return (
        <>
            <h1>List of Monsters</h1>
            {error && <div>{error}</div>}{' '}
            {monsters ? (
                <ul>
                    {' '}
                    {monsters.map((monster) => (
                        <li key={monster.slug}>{monster.name}</li>
                    ))}{' '}
                </ul>
            ) : (
                <p>No monsters found</p>
            )}{' '}
        </>
    );
}

Encounter.propTypes = { challengeRating: PropTypes.number };
Encounter.defaultProps = { challengeRating: 3 };

export default Encounter;
