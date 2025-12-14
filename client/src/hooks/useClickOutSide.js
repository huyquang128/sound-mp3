import React, { useEffect, useRef } from 'react';

function useClickOutSide(handler) {
    const ref = useRef();

    useEffect(() => {
        const handleOutSide = (event) => {
            if (!ref.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('click', handleOutSide);

        return () => document.removeEventListener('click', handleOutSide);
    }, [ref, handler]);

    return { ref };
}

export default useClickOutSide;
