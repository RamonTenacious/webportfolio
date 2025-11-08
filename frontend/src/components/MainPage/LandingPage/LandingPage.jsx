import { useContext } from 'react';
import './LandingPage.css';
import titleImg from '../../../assets/images/background/Title.png';
import titleMobileImg from '../../../assets/images/background/TitleMobile.png'
import skullImg from '../../../assets/images/background/SkullImage.png';
import { deviceContext } from '../../../context/DeviceContext';

export const LandingPage = () => {
    const deviceProps = useContext(deviceContext)

    return (
        <section id='landingPage' className='landingPage'>
            <figure className='landingPage__titleFigure'>
                <div className='landingPage__titleWrapper'>
                    <img className='landingPage__titleImg'
                        src={deviceProps.isMobile ? titleMobileImg : titleImg}
                        alt='Tenacious Software Engineer'
                    />
                    <img className='landingPage__skullImg'
                        src={skullImg}
                        alt='Skull Image'
                    />
                </div>
            </figure>
        </section>
    )
}