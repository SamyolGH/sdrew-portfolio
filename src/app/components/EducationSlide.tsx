"use client"

import { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const EducationSlide = () => {
    const [ isVisible, setIsVisible ] = useState( true );

    useEffect( () => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY < window.innerHeight * 1.5); 
        }

        window.addEventListener( "scroll", handleScroll );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, []);

    const handleScroll = () => {
        const nextSection = document.getElementById( "intSection" );

        if ( nextSection ) {
            nextSection.scrollIntoView( { behavior: "smooth" } )
        }
    }

    return(
        <section id="edSection" className="flex relative h-screen w-screen bg-gray-900 font-sans justify-center items-center">
            <div className="flex flex-col items-center gap-4 max-w-2xl m-4">
                <h1 className="text-7xl font-bold text-center text-lime-500">My Education<p className="text-sm text-gray-500">for now :o</p></h1>

                <div className="flex flex-col items-start gap">
                    <h2 className="text-2xl text-left font-bold">Bachelor of Information Technology</h2>
                    <h3 className="text-xl text-left text-gray-500 italic">2021 - Current</h3>
                    <p>
                        I have undertaken been this undergrad at the <a href="https://www.unisq.edu.au/" target="_blank" className="font-bold hover:text-lime-500 transition">University of Southern Queensland</a>
                        , also known as UniSQ.
                        It is a double major, in both Applied Computer Science and Networking & Security.
                        I've had a large amount of disagreements with the delivery and quality of the education
                        provided and this has extended my courses completion as moral qualms were had regarding certain
                        course activities.
                    </p>
                </div>
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
    )
}

export default EducationSlide;