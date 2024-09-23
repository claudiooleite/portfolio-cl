"use client";

import { useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import DownloadButton from './DownloadBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const styleLink = 'text-lg font-semibold tracking-wide py-1 py-2 bg-[#ef825488] w-1/2 rounded-lg '
    return (
        <>
            <button
                onClick={onOpen}
                className='z-40 fixed top-3 right-0 bg-gunmetal bg-opacity-100 p-2  rounded-s-full'>
                <FontAwesomeIcon
                    icon={faBars}
                    style={{ filter: "brightness(0) invert(100%)" }}
                    size='l'
                    key={'xs'}
                />
            </button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={'xs'}
            >
                <DrawerOverlay />

                <DrawerContent>

                    <DrawerCloseButton />

                    <DrawerBody className='flex flex-col text-center gap-2 items-center mt-10'>
                        <a href="#about" onClick={onClose} className={styleLink} >About</a>
                        <a href="#skills" onClick={onClose} className={styleLink}>Skills</a>
                        <a href="#projects" onClick={onClose} className={styleLink}>Projects</a>
                        <a href="#contact" onClick={onClose} className={styleLink}>Contact</a>
                        <div className='p-2'></div>
                        <DownloadButton />
                    </DrawerBody>



                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavBar