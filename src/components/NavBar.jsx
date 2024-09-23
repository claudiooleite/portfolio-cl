

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    
    return (

        <div className='z-40 fixed bg-gunmetal bg-opacity-100 p-2 rounded-full'>
            <FontAwesomeIcon icon={faBars} style={{ filter: "brightness(0) invert(100%)" }} size='xl' />
        </div>

    )
}

export default NavBar