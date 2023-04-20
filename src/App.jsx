/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Encounter from './components/Encounter/Encounter';
import Party from './components/Party/Party';
import { calculateChallengeRating } from './utils/challengeRating';
import PaperScroll from './components/PaperScroll/PaperScroll';

function App() {
    const [challengeRating, setChallengeRating] = useState(null);
    const [seeEncounter, setSeeEncounter] = useState(false);

    const submitData = (formData) => {
        setChallengeRating(
            calculateChallengeRating(formData.numCharacters, formData.level, formData.difficulty),
        );
        setSeeEncounter(true);
    };

    return (
        <div className='flex min-h-screen flex-col bg-neutral-900 text-orange-100'>
            <Hero />
            <PaperScroll
                contents={
                    <main className='flex grow flex-col overflow-auto px-[10%] py-5 lg:h-[calc(100vh-16rem)]'>
                        <section>
                            <Party saveData={submitData} />
                        </section>
                        <section>
                            {seeEncounter && <Encounter challengeRating={challengeRating} />}
                        </section>
                    </main>
                }
            />
            <footer className='min-w-full shrink-0 bg-red-950 pt-6 text-center text-xs text-orange-100'>
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
