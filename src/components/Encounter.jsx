import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getMonstersFromAPI from './utilities/API';

function Encounter({ challengeRating = 3 }) {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

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

        fetchData();

        return () => {
            ignore = true;
        };
    }, [challengeRating]);

    return error ? (
        <p>Unable to retrieve data</p>
    ) : (
        <ul>
            {monsters.map((monster) => (
                <li key={monster.slug}>{monster.name}</li>
            ))}
        </ul>
    );
}

Encounter.propTypes = { challengeRating: PropTypes.number };
Encounter.defaultProps = { challengeRating: 3 };

export default Encounter;
