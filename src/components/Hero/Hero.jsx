import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Form/Button';

function Hero({ clickCB }) {
    const [isMinimised, setIsMinimised] = useState(false);

    const heroClick = () => {
        setIsMinimised(true);
        clickCB();
    };

    return (
        <section
            className={`${
                isMinimised ? 'h-[20vh] ' : 'h-screen'
                // eslint-disable-next-line prettier/prettier
            }  bg-dragon bg-cover bg-right bg-no-repeat`}
        >
            <div
                className={`${
                    isMinimised ? 'h-[20vh]' : 'h-screen '
                }  flex flex-col bg-neutral-900/50`}
            >
                <header className=' flex flex-none flex-col text-center'>
                    <h1 className="font-['Goblin_One'] text-4xl lg:text-8xl">DDEG</h1>
                    <h2 className="font-['Alegreya_Sans_SC'] text-2xl">
                        Dungeons & Dragons Encounter Generator
                    </h2>
                </header>

                {!isMinimised && (
                    <div className='flex flex-1 grow flex-col justify-evenly text-center'>
                        <h2 className="font-['Alegreya_Sans_SC'] text-2xl lg:text-5xl">
                            Take the stress out of being a DM
                        </h2>
                        <p className=" font-['Alegreya_Sans'] text-xl lg:text-3xl">
                            Generate an encounter customised to YOUR party
                        </p>
                        <span>
                            <Button
                                type='button'
                                label='Build Your Encounter'
                                onClick={heroClick}
                            />
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}

Hero.propTypes = {
    clickCB: PropTypes.func.isRequired,
};

export default Hero;
