import { Experiences, Footer, LandingPage, Projects, Skills } from '../../components';
import './MainPage.css';

export const MainPage = () => {
    return (
        <section>
            <LandingPage />
            <Skills />
            <Projects />
            <Experiences />
            <Footer />
        </section>
    )
}