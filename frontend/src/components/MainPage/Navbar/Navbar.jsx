import { useEffect, useState } from 'react'
import './Navbar.css'
import { useScrolledDown } from '../../../hooks/useScrolledDown';
import { useMostVisibleComponent } from '../../../hooks/useMostVisibleComponent';

export const Navbar = () => {
    const options = [
        { name: "Home", target: "landingPage" },
        { name: "Expertises", target: "expertises" },
        { name: "Portal Gallery", target: "portalGallery" }
    ];

    const scrolledDown = useScrolledDown(50);
    const [sections, setSections] = useState([]);
    
    useEffect(() => {
        setSections(Array.from(document.querySelectorAll("section[id]")));
    }, [])

    const activeSection = useMostVisibleComponent(sections, options);

    return (
        <section className={scrolledDown ? 'navbar navbar-scrolled' : 'navbar'} id='navbar'>
            <nav>
                <ul className='navbar__ul'>
                    {
                        options.map((data, index) => (
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