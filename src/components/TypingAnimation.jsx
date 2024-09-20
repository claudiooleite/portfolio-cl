import { useState, useEffect } from 'react';

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "a Front-end Developer",
        "a dreamer",
        "a great team player",
        "always learning",
        "passionate about UI/UX",
        "here to collaborate"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[loopNum % roles.length];
            setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, typingSpeed, loopNum]);

    return (
        <div className='flex gap-1 drop-shadow-md'>
            <h2 className='text-xl'>I'm</h2><span className="text-xl underline decoration-paynesGray">{text}</span>
        </div>
    );
};

export default TypingAnimation;
