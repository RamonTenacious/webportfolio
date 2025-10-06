import { useState } from "react";
import menuIcon  from '../../../../assets/images/icons/menuIcon.png';
import { NAVBAR_OPTIONS } from "../../../../constants/navbarOptions";
import './NavbarMobile.css'

export const NavbarMobile = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(isMenuOpen ? false : true);
    }

    return (
        <section>
            <img className='navbar__menuIcon'
                src={menuIcon}
                alt='Menu Icon'
                onClick={() => handleMenuClick()}
            />
            {
                isMenuOpen ? 
                <div className='navbar__menu'>
                    {
                        NAVBAR_OPTIONS.map((data, index) => (
                            <li key={index}>
                                <div className='navbar__wrapper'>
                                    <a href={`#${data.target}`} className='navbar__a' onClick={() => setIsMenuOpen(false)}>
                                        {data.name}
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </div>
                : 
                <></>
            }
        </section>
    )
}