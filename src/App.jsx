/* eslint-disable no-console */
import React, { useState } from 'react';
import Encounter from './components/Encounter';
import Party from './components/Party';
import { calculateChallengeRating } from './utils/challengeRating';

function App() {
    const [challengeRating, setChallengeRating] = useState(null);
    const [seeEncounter, setSeeEncounter] = useState(false);
    

    const submitData = (formData) => {
        calculateChallengeRating(formData.numCharacters, formData.difficulty);

        // placeholder for now
        setChallengeRating(12);
        setSeeEncounter(true);
        console.log(formData);
    };

    calculateChallengeRating(1, 'Easy');

    return (
        <div>
            <Party saveData={submitData} />
            {seeEncounter ? <Encounter challengeRating={challengeRating} /> : null}
        </div>
    );
}

export default App;
