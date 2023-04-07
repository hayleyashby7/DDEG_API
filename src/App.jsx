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
        <div className='flex min-h-screen flex-col'>
            <header className='shrink-0'>
                <h1>D&D 5e Encounter Generator</h1>
            </header>
            <main className='grow'>
                <section>
                    <Party saveData={submitData} />
                </section>
                <section>
                    {seeEncounter ? <Encounter challengeRating={challengeRating} /> : null}
                </section>
            </main>
            <footer className='shrink-0'>
                <p>&copy; Hayley Ashby 2023</p>
            </footer>
        </div>
    );
}

export default App;
