import { useState, useEffect } from "react";

export const useScrolledDown = (threshold = 200) => {
    const [scrolled, setScrolled] = useState(false);

    console.log(window.scrollY)
    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isScrolled = window.scrollY >= threshold;
                    setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return scrolled;
}