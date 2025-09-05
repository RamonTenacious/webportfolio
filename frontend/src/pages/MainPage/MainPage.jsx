import { Contact, Experiences, LandingPage, Projects, Skills } from '../../components';
import './MainPage.css';

export const MainPage = () => {
    return (
        <section className='MainPage'>
            <main className='MainPage__content'>
                <LandingPage />
                <Skills />
                <Projects />
                <Experiences />
            </main>
            <footer>
                <Contact />
            </footer>
        </section>
    )
}