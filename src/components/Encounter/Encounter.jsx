import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMonstersFromAPI } from '../../utils/API';
import isValidChallengeRating from '../../utils/challengeRating';

function Encounter({ challengeRating }) {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        const fetchData = async () => {
            try {

                if (!isValidChallengeRating({ challengeRating })) {
                    throw new Error('Unable to request data.');
                }
                
                const data = await getMonstersFromAPI({ challengeRating });

                if (data instanceof Error) {
                    throw new Error(
                        'Unable to retrieve monsters from server. Please try again later.',
                    );
                }
                if (data.count === 0) {
                    throw new Error('No suitable monsters found.');
                }

                setMonsters(data.results);
            } catch (err) {
                setError(true);
                setMessage(err.message);
            }
        };

        fetchData();
    }, [challengeRating]);

    return (
        <>
            <h1>List of Monsters</h1>
            {error && <div>{message}</div>}{' '}
            {monsters ? (
                <ul>
                    {' '}
                    {monsters.map((monster) => (
                        <li key={monster.slug}>{monster.name}</li>
                    ))}{' '}
                </ul>
            ) : (
                <p>{message}</p>
            )}{' '}
        </>
    );
}

Encounter.propTypes = { challengeRating: PropTypes.number };
Encounter.defaultProps = { challengeRating: null };

export default Encounter;
