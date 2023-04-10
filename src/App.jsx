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
        <div className='flex min-h-screen flex-col  items-center bg-orange-100'>
            <header className='min-w-full shrink-0 bg-red-950 text-orange-100'>
                <h1>D&D 5e Encounter Generator</h1>
            </header>
            <main className='flex grow flex-col '>
                <section>
                    <Party saveData={submitData} />
                </section>
                <section>
                    {seeEncounter ? <Encounter challengeRating={challengeRating} /> : null}
                </section>
            </main>
            <footer className='min-w-full shrink-0  bg-red-950 text-center text-orange-100'>
                <p>D&D 5e Encounter Generator &copy; Hayley Ashby 2023</p>
                <p className='text-xs'>
                    No claims of license of either Open5e nor to SRD or OGL content provided by
                    Open5e. This site is unofficial Fan Content permitted under the Fan Content
                    Policy. Not approved/endorsed by Wizards. Portions of the materials used are
                    property of Wizards of the Coast &copy; Wizards of the Coast LLC.
                </p>
            </footer>
        </div>
    );
}

export default App;
