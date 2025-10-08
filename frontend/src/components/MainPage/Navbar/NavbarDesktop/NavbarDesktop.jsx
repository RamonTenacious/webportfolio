import { useState, useEffect } from 'react';
import { NAVBAR_OPTIONS } from '../../../../constants/navbarOptions';
//import { useMostVisibleComponent } from '../../../../hooks/useMostVisibleComponent';
import { useScrolledDown } from '../../../../hooks/useScrolledDown';
import './NavbarDesktop.css';

export const NavbarDesktop = () => {
    const [sections, setSections] = useState([]);
    const scrolledDown = useScrolledDown(200);
    //const activeSection = useMostVisibleComponent(sections, NAVBAR_OPTIONS);

    useEffect(() => {
        setSections(Array.from(document.querySelectorAll("section[id]")));
    }, []);
    
    return (
        <section className={scrolledDown ? 'navbar navbar-scrolled' : 'navbar'} id='navbar'>
            <nav>
                <ul className='navbar__ul'>
                    {
                        NAVBAR_OPTIONS.map((data, index) => (
                            <li key={index}>
                                <div className='navbar__wrapper'>
                                    <a href={`#${data.target}`} className='navbar__a-unselected'>
                                        {data.name}
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}