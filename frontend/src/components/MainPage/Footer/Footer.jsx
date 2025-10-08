import './Footer.css';
import githubIcon from '../../../assets/images/icons/Github.png';
import linkedinIcon from '../../../assets/images/icons/Linkedin.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className='footer'>
            <h6>© {currentYear} Tenacious. All rights reserved.</h6>
            <h6>ramontenacious@gmail.com</h6>
            <figure className='footer__figure'>
                <a href='https://github.com/RamonTenacious' target='_blank' rel='noopener noreferrer'>
                    <img src={githubIcon} alt='Github Icon'/>
                </a>
                <a href='https://www.linkedin.com/in/ramon-mauricio-1b0b8829b/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedinIcon} alt='Linkedin'/>
                </a>
            </figure>
        </section>
    );
};