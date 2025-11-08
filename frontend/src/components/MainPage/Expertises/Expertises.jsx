import { EXPERTISES_OPTIONS } from '../../../constants/expertisesOptions'
import './Expertises.css'

export const Expertises = () => {
    return (
        <section id='expertises' className='expertises__wrapper appearAnimation'>
            <section className='expertises'>
                <div className='expertises__inner'>
                    <header className='expertises__header'>
                        <h2 className='expertises__title'>Expertises</h2>
                        <h5 className='expertises__subtitle'>Started my journey at 16 years old...</h5>
                    </header>
                    <div className='expertises__contentWrapper'>
                    {
                        EXPERTISES_OPTIONS.map((data, index) => (
                            <div key={index} className='expertises__content'>
                                <h3>{data.title}</h3>
                                <p>{data.content}</p>
                                <div className='expertises__iconWrapper'>
                                    { data.icons.map((Icon, index) => (
                                        <Icon key={index} className='expertises__icon'/>  
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </section>
    )
}