import { Navbar, LandingPage, Expertises, PortalGallery, Footer } from '../../components';
import './MainPage.css';

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