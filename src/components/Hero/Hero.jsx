import React, { useEffect, useRef } from 'react';
import PaperScroll from '../PaperScroll/PaperScroll';

function Hero() {
    const heroContent = useRef(null);
    const heroHeader = useRef(null);

    const handleScroll = () => {
        const header = heroHeader.current;
        const content = heroContent.current;

        if (header && content) {
            const { top } = content.getBoundingClientRect();
            if (top < 0) {
                header.classList.add('bg-red-950');
            } else {
                header.classList.remove('bg-red-950');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className='relative h-screen bg-dragon bg-cover bg-top bg-no-repeat'
            data-testid='hero-main'
        >
            <div className='flex h-screen flex-col bg-neutral-900/50'>
                <header
                    ref={heroHeader}
                    className="fixed top-0 z-[999] flex w-screen flex-none flex-col py-5 text-center font-['MedievalSharp'] transition-colors duration-500"
                >
                    <h1 className='text-4xl md:text-8xl'>DDEG</h1>
                    <h2 className='text-lg md:text-2xl'>Dungeons & Dragons Encounter Generator</h2>
                </header>

                <div className='flex flex-1 flex-col justify-evenly text-center' ref={heroContent}>
                    <PaperScroll
                        contents={
                            <>
                                <h2 className="font-['Alegreya_Sans_SC'] text-2xl lg:text-5xl">
                                    Take the stress out of being a DM
                                </h2>
                                <p className=" font-['Alegreya_Sans'] text-xl lg:text-3xl">
                                    Generate an encounter customised to YOUR party
                                </p>
                            </>
                        }
                    />
                    <span>Build Your Encounter</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
