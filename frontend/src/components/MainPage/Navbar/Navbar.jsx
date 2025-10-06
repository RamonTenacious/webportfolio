import { useContext } from 'react'
import './Navbar.css'
import { deviceContext } from '../../../context/DeviceContext';
import { NavbarMobile } from './NavbarMobile/NavbarMobile';
import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop';

export const Navbar = () => {
    const deviceProps = useContext(deviceContext);

    return deviceProps.isMobile ? (
            <NavbarMobile />
        ) : (
            <NavbarDesktop />
        )
}