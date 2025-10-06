import { useContext } from 'react';
import './LandingPage.css';
import titleImg from '../../../assets/images/background/Title.png';
import titleMobileImg from '../../../assets/images/background/TitleMobile.png'
import skullImg from '../../../assets/images/background/SkullImage.png';
import mouseIcon from '../../../assets/images/icons/mouseIcon.png';
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
                    <span className='landingPage__mouseWrapper'>
                        <img className='landingPage__mouseIcon'
                            src={mouseIcon}
                            alt='Mouse Icon' 
                        />
                    </span>
                    <img className='landingPage__skullImg'
                        src={skullImg}
                        alt='Skull Image'
                    />
                </div>
            </figure>
        </section>
    )
}