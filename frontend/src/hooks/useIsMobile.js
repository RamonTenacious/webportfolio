import { useState, useEffect } from 'react';
import { MOBILE_SIZE } from '../constants/constants';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SIZE);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_SIZE);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}
