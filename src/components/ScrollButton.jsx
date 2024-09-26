"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    return (
        <button
            className="fixed z-50 bottom-6 right-9 bg-[#f39c77]/30 rounded-md px-3 py-2"
            style={{ display: visible ? "inline" : "none" }} // Control button visibility with inline style
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </button>
    );
};

export default ScrollButton;
