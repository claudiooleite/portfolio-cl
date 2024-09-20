import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (

        <div className='z-40 fixed'>
            <FontAwesomeIcon icon={faBars} style={{ width: '35px', height: '35px' }} />
        </div>

    )
}

export default NavBar