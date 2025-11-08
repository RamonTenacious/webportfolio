import './Footer.css';
import githubIcon from '../../../assets/images/icons/Github.png';
import linkedinIcon from '../../../assets/images/icons/Linkedin.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const icons = [
        {
            icon: FaGithub,
            altIcon: "GithubIcon",
            link: "https://github.com/RamonTenacious"
        },
        {
            icon: FaLinkedin,
            altIcon: "Linkedin Icon",
            link: "https://www.linkedin.com/in/ramon-mauricio-1b0b8829b/"
        }
    ]

    return (
        <section className='footer'>
            <h6>© {currentYear} Tenacious. All rights reserved.</h6>
            <h6>ramontenacious@gmail.com</h6>
            <figure className='footer__figure'>
                {icons.map((data, index) => {
                    const IconComponent = data.icon;

                    return (
                        <a key={index} href={data.link} target='_blank' rel='noopener noreferrer'>
                            <IconComponent className='footer__icon' />
                        </a>
                    );
                })}
            </figure>
        </section>
    );
};