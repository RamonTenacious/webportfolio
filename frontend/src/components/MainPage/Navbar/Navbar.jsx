import { useEffect, useState } from 'react'
import './Navbar.css'
import { useScrolledDown } from '../../../hooks/useScrolledDown';

export const Navbar = () => {

    const scrolledDown = useScrolledDown(50);
    
    const options = [
        {
            name: "Home",
            target: "landingPage"
        },
        {
            name: "Expertises",
            target: "expertises"
        },
        {
            name: "Portal Gallery",
            target: "portalGallery"
        }
    ]

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        const filteredSections = Array.from(sections).filter(section => 
            options.some(opt => opt.target === section.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                const visibileEntry = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibileEntry) {
                    setActiveSection(visibileEntry.target.id);
                }
            },
            {
                threshold: Array.from({ length: 101}, (_, i) => i / 100)
            }
        )

        filteredSections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

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