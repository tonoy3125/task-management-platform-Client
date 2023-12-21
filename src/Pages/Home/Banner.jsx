import { Link } from 'react-router-dom';
import styleHome from './hero.module.css';

const Banner = () => {
    return (
        <div>
            <div className={`hero min-h-screen ${styleHome.heroBg}`}>
                <div className="hero-overlay bg-opacity-80 bg-darkOne"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col">
                        <h1 className="font-playfairDisplay text-white font-normal capitalize text-xl md:text-2xl lg:text-3xl py-12 md:py-8 lg:p-12 leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]">
                            Stay organized with our intuitive task management system. Create,
                            assign, and track tasks effortlessly. <br /> Foster teamwork with
                            real-time collaboration features. Seamlessly communicate and share
                            updates with your team.
                        </h1>
                        <div>
                            <Link to="/dashboard">
                                <button className="bg-darkOne px-12 py-4 text-sm md:text-xl lg:text-2xl font-lora font-bold tracking-wide rounded-lg border-2 border-lightOne hover:border-white duration-200 hover:bg-white hover:scale-105 hover:text-darkThree">
                                    let&apos;s Explore
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;