import leetCodeIcon from '../assets/leetcode.svg'
import codeWars from '../assets/codewars_icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

function Footer() {
    return (
        <div
            id='footer'
            className='bg-[#e2e2e2] p-5'>
            <h1 className='p-3 text-3xl text-gunmetal font-bold font-heading text-center'>Claudio Leite</h1>
            <p className="mt-2 italic text-sm text-center">
                &quot;Crafting clean code and strong foundations—whether in apps or on the field.&quot;
            </p>
            <ul className=' flex justify-center items-center gap-6 pt-5'>
                <li className='bg-gunmetal p-2 rounded-full'>
                    <a
                        href={''}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faGithubSquare}
                            style={{ filter: "brightness(0) invert(100%)" }}
                            size="xl" />
                    </a>
                </li>
                <li
                    className="flex items-center bg-gunmetal p-2 rounded-full">
                    <a
                        href={''}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src={codeWars}
                            className="w-21"
                            alt="CodeWars profile link"
                            style={{ filter: "brightness(0) invert(100%)" }} />
                    </a>
                </li>
                <li
                    className='bg-gunmetal p-2 rounded-full'
                >
                    <a
                        href={''}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src={leetCodeIcon}
                            className="w-21"
                            alt="LeetCode profile link"
                            style={{ filter: "brightness(0) invert(100%)" }} />
                    </a>
                </li>
                <li
                    className='bg-gunmetal p-2 rounded-full'
                >
                    <a
                        href={''}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ filter: "brightness(0) invert(100%)" }} size="xl" />
                    </a>
                </li>
            </ul>
            <div className=" w-2/4 h-0.5 bg-gradient-to-r from-transparent  via-coral to-transparent mx-auto my-5"></div>
            <p className="text-sm text-center pb-4">
                © {new Date().getFullYear()} Claudio Leite. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;