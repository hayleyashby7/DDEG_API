/* eslint-disable no-console */
import React, { useState } from 'react';
import Encounter from './components/Encounter';
import Party from './components/Party';
import { calculateChallengeRating } from './utils/challengeRating';

function App() {
    const [challengeRating, setChallengeRating] = useState(null);
    const [seeEncounter, setSeeEncounter] = useState(false);

    const submitData = (formData) => {
        setChallengeRating(
            Number(
                calculateChallengeRating(
                    formData.numCharacters,
                    formData.level,
                    formData.difficulty,
                ),
            ),
        );
        setSeeEncounter(true);
    };

    return (
        <div>
            <Party saveData={submitData} />
            {seeEncounter ? <Encounter challengeRating={challengeRating} /> : null}
        </div>
    );
}

export default App;
