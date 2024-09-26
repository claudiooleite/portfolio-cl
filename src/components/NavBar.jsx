"use client";

import { useDisclosure } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import DownloadButton from './DownloadBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faListCheck, faDiagramProject, faAddressBook } from '@fortawesome/free-solid-svg-icons'



function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const styleLink = 'flex gap-3 items-center justify-center text-lg font-semibold tracking-wide py-1 py-2 bg-lightGray w-1/2 rounded-lg border-coral/75 border-2'
    return (
        <>
            
            <nav className='md:hidden'>
                <button
                    onClick={onOpen}
                    className='z-40 fixed top-3 right-0 bg-gunmetal bg-opacity-100 p-3  rounded-s-full'>
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
                            <a href="#about" onClick={onClose} className={styleLink} >
                                <FontAwesomeIcon
                                    icon={faHome}
                                    style={''}
                                    size='l'
                                    key={'xs'}
                                />
                                About
                            </a>
                            <a href="#skills" onClick={onClose} className={styleLink}>
                                <FontAwesomeIcon
                                    icon={faListCheck}
                                    style={''}
                                    size='l'
                                    key={'xs'}
                                />
                                Skills
                            </a>
                            <a href="#projects" onClick={onClose} className={styleLink}>
                                <FontAwesomeIcon
                                    icon={faDiagramProject}
                                    style={''}
                                    size='l'
                                    key={'xs'}
                                />
                                Projects
                            </a>
                            <a href="#contact" onClick={onClose} className={styleLink}>
                                <FontAwesomeIcon
                                    icon={faAddressBook}
                                    style={''}
                                    size='l'
                                    key={'xs'}
                                />
                                Contact
                            </a>
                            <div className='p-2'></div>
                            <DownloadButton />
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </nav>
        </>
    )
}

export default NavBar