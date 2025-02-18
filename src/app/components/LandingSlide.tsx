"use client"

import { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const LandingSlide = () => {
    const [ isVisible, setIsVisible ] = useState( true );

    useEffect( () => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY < window.innerHeight * 0.5); 
        }

        window.addEventListener( "scroll", handleScroll );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, []);

    const handleScroll = () => {
        const nextSection = document.getElementById( "edSection" );

        if ( nextSection ) {
            nextSection.scrollIntoView( { behavior: "smooth" } )
        }
    }

    return (
        <section id="lsSection" className="flex h-screen w-screen bg-gray-900 font-sans justify-center items-center">
            <div className="flex flex-col items-center gap-4 max-w-2xl m-4">
                <h1 className="text-7xl font-bold text-center text-lime-500">Hi. I'm Sam.</h1>
                <p className="text-2xl/8 text-center font-semibold">I'm an aspiring front-end/back-end developer from Brisbane, Australia. Scroll down to learn more about me!</p>
            </div>
            <span className={`absolute bottom-5 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <button onClick={ handleScroll }>
                    <MdOutlineKeyboardDoubleArrowDown
                        style={{
                            width: '48px',
                            height: '48px'
                        }}
                        className="transition hover:text-green-500 hover:scale-110"
                    />
                </button>
            </span>
        </section>
    );
}

export default LandingSlide;