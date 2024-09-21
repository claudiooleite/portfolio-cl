import Image from "next/image";
import avatarCla from '../assets/images/no-back-cl.png'

function Avatar() {
    return (
        <div className="w-24 h-24 m-2 rounded-full overflow-hidden opacity-90 shadow-md z-50 float-right">
            <Image
                className="w-full h-full object-cover "
                src={avatarCla}
            />
        </div>
    );
}


export default Avatar

