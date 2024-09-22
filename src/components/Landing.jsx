'use client'

import TypingAnimation from "./TypingAnimation"
import leetCodeIcon from '../assets/leetcode.svg'
import codeWars from '../assets/codewars_icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

function Landing() {
    return (
        <div className="h-lvh relative flex items-center ">
            <img className="absolute h-full w-full object-cover z-0 opacity-20	" src="https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background with a shot of a person from his back staring at the infinit" />
            <div className="absolute z-10 pl-5 flex flex-col gap-2">
                <h1 className="text-3xl text-gunmetal font-bold font-heading ">Claudio Leite</h1>
                <TypingAnimation />

                <ul className='flex items-center gap-6 pt-5 opacity-70'>
                    <li>
                        <a href={''} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} size="xl" />
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href={''} target="_blank" rel="noopener noreferrer">
                            <Image src={codeWars} className='w-21' alt="CodeWars profile link" />
                        </a>
                    </li>
                    <li>
                        <a href={''} target="_blank" rel="noopener noreferrer">
                            <Image src={leetCodeIcon} style={{ filter: "brightness(0%)" }} className="w-21" alt="LeetCode profile link" />
                        </a>
                    </li>
                    <li>
                        <a href={''} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Landing

