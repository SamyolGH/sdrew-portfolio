"use client"

import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const InterestsSlide = () => {

    const handleScroll = () => {
        return window.scrollTo( { top: 0, behavior: "smooth" } );
    }

    return (
        <section id="intSection" className="flex relative h-screen w-screen bg-gray-900 font-sans justify-center items-center">
            <div className="flex flex-col items-center m-4 gap-4 max-w-2xl">
                <h1 className="text-7xl font-bold text-center text-lime-500">My Interests</h1>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-xl text-center font-bold">
                        I have many interests, most of which are associated with computer hardware and software
                    </p>
                    <ul className="space-y-1 text-gray-500 text-center list-none list-inside dark:text-gray-400">
                        <li>
                            I enjoy playing developing front-end/back-end JS apps using React, Next, NodeJS and more.
                        </li>
                        <li>
                            I consider myself highly knowledgeable about computer hardware and have been building and maintaining computers since my teens.
                        </li>
                        <li>
                            Whilst I enjoy web development, I also have an interest in low-level computer programming such as that in C.
                        </li>
                    </ul>
                </div>
            </div>
            <span className={`absolute bottom-5 `}>
                <button onClick={ handleScroll }>
                    <MdOutlineKeyboardDoubleArrowUp
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
};

export default InterestsSlide;