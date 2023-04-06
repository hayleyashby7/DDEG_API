import React, { useState } from 'react';
import Encounter from './components/Encounter';
import Party from './components/Party';
import { calculateChallengeRating } from './utils/challengeRating';
import './index.css';

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
        <>
            <header>
                <h1>D&D 5e Encounter Generator</h1>
            </header>

            <main>
                <Party saveData={submitData} />
                {seeEncounter ? <Encounter challengeRating={challengeRating} /> : null}
            </main>
            <footer>
                <p>Handcoded with care &copy; Hayley Ashby 2023</p>
            </footer>
        </>
    );
}

export default App;
