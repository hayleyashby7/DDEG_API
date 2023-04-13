/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Encounter from './components/Encounter/Encounter';
import Party from './components/Party/Party';
import { calculateChallengeRating } from './utils/challengeRating';

function App() {
    const [challengeRating, setChallengeRating] = useState(null);
    const [seeParty, setSeeParty] = useState(false);
    const [seeEncounter, setSeeEncounter] = useState(false);

    const clickHero = () => {
        setSeeParty(true);
    };

    const submitData = (formData) => {
        setChallengeRating(
            calculateChallengeRating(formData.numCharacters, formData.level, formData.difficulty),
        );
        setSeeEncounter(true);
    };

    return (
        <div className='flex min-h-screen flex-col bg-neutral-900 text-orange-100'>
            <Hero clickCB={clickHero} />
            <main className='flex grow flex-col px-[10%]'>
                <section>{seeParty && <Party saveData={submitData} />}</section>
                <section>{seeEncounter && <Encounter challengeRating={challengeRating} />}</section>
            </main>
            <footer className='min-w-full shrink-0 bg-red-950 text-center text-xs text-orange-100'>
                <p className='font-bold'>
                    DDEG - Dungeons & Dragons Encounter Generator &copy; Hayley Ashby 2023
                </p>
                <p>
                    No claims of license of either Open5e nor to SRD or OGL content provided by
                    Open5e. This site is unofficial Fan Content permitted under the Fan Content
                    Policy. Not approved/endorsed by Wizards. Portions of the materials used are
                    property of Wizards of the Coast &copy; Wizards of the Coast LLC.
                </p>
            </footer>{' '}
        </div>
    );
}

export default App;
