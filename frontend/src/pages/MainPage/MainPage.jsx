
import { deviceContext } from '../../context/DeviceContext';
import { Navbar, LandingPage, Expertises, PortalGallery, Footer } from '../../components';
import './MainPage.css';
import { useEffect, useState } from 'react';

export const MainPage = () => {
    return (
        <section className='mainPage'>
            <Navbar />
            <LandingPage />
            <Expertises />
            <PortalGallery />
            <Footer />
        </section>
    )
}