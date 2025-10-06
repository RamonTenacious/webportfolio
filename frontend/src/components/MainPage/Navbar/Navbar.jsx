import { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { useScrolledDown } from '../../../hooks/useScrolledDown';
import { useMostVisibleComponent } from '../../../hooks/useMostVisibleComponent';
import { NAVBAR_OPTIONS } from '../../../constants/navbarOptions';
import { deviceContext } from '../../../context/DeviceContext';

export const Navbar = () => {
    const scrolledDown = useScrolledDown(200);
    const [sections, setSections] = useState([]);

    const test = useContext(deviceContext);
    console.log(test)
    
    useEffect(() => {
        setSections(Array.from(document.querySelectorAll("section[id]")));
    }, [])

    const activeSection = useMostVisibleComponent(sections, NAVBAR_OPTIONS);

    return (
        <section className={scrolledDown ? 'navbar navbar-scrolled' : 'navbar'} id='navbar'>
            <nav>
                <ul className='navbar__ul'>
                    {
                        NAVBAR_OPTIONS.map((data, index) => (
                            <li key={index}>
                                <div className='navbar__wrapper'>
                                    <a href={`#${data.target}`} className={activeSection == data.target ? 'navbar__a-selected' : 'navbar__a-unselected'}>
                                        {data.name}
                                    </a>
                                    {activeSection == data.target ? <span className='navbar__dot' /> : <></>}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}