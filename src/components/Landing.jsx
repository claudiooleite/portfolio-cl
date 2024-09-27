'use client'

import TypingAnimation from "./TypingAnimation"
import leetCodeIcon from '../assets/leetcode.svg'
import codeWars from '../assets/codewars_icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

function Landing() {
    return (
        <div className="h-lvh relative flex  items-center ">
            <Image
                className="absolute h-full w-full object-cover z-0 opacity-20"
                src="https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background with a shot of a person from his back staring at the infinite"
                sizes="100vw"
                fill

            />
            {/* Container with max-width of 1280px */}
            <div className=" w-full max-w-screen-xl mx-auto px-4 flex items-center">
                <nav className='hidden md:flex z-40 absolute  top-6 right-9  rounded-md px-3 py-1 '>
                    <ul className='flex gap-4 text-xl'>
                        <li>
                            <a href="#about">About </a>
                        </li>
                        <li>
                            <a href="#skills">Skills </a>
                        </li>
                        <li>
                            <a href="#projects">Projects </a>
                        </li>
                        <li>
                            <a href="#contact">Contact </a>
                        </li>
                    </ul>
                </nav>

                <div className="absolute z-10 pl-5 flex flex-col gap-2">
                    <h1 className="text-3xl text-gunmetal font-bold font-heading ">Claudio Leite</h1>
                    <TypingAnimation />

                    <ul className='flex items-center gap-6 pt-5 opacity-70'>
                        <li>
                            <a href={'https://github.com/claudiooleite'} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faGithubSquare}
                                    style={{ filter: "brightness(0) saturate(100%) invert(30%) sepia(4%) saturate(500%) hue-rotate(190deg)" }}
                                    size="xl" />
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a href={'https://www.codewars.com/users/claudiooleite'} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={codeWars}
                                    className="w-21"
                                    alt="CodeWars profile link"
                                    style={{ filter: "brightness(0) saturate(100%) invert(30%) sepia(4%) saturate(500%) hue-rotate(190deg)" }}
                                />
                            </a>
                        </li>
                        <li>
                            <a href={'https://leetcode.com/u/claudiooleite/'} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={leetCodeIcon}
                                    className="w-21"
                                    alt="LeetCode profile link"
                                    style={{ filter: "brightness(0) saturate(100%) invert(30%) sepia(4%) saturate(500%) hue-rotate(190deg)" }}
                                />
                            </a>
                        </li>
                        <li>
                            <a href={'https://www.linkedin.com/in/claudio-leite-bb2a3262/'} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    style={{ filter: "brightness(0) saturate(100%) invert(30%) sepia(4%) saturate(500%) hue-rotate(190deg)" }}
                                    size="xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landing

