import './LandingPage.css';
import titleImg from '../../../assets/images/background/Text.png';
import skullImg from '../../../assets/images/background/SkullImage.png';
import mouseIcon from '../../../assets/images/icons/mouseIcon.png';

export const LandingPage = () => {
    return (
        <section id='landingPage' className='landingPage'>
            <figure className='landingPage__titleFigure'>
                <div className='landingPage__titleWrapper'>
                    <img className='landingPage__titleImg'
                        src={titleImg}
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