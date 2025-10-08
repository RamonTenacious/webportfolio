import './PortalGallery.css';
import arrow from '../../../assets/images/icons/arrow.png';
import quasarImg from '../../../assets/images/portalGallery/Quasar.png';
import { PORTAL_GALLERY_OPTIONS } from '../../../constants/portalGalleryOptions';
import { useState } from 'react';


export const PortalGallery = () => {
    console.log(PORTAL_GALLERY_OPTIONS[0].content)

    const [selectedFilter, setSelectedFilter] = useState(0);

    const handleFilterOnClick = (id) => {
        setSelectedFilter(id);
    }

    return (
        <section className='portalGallery' id='portalGallery'>
            <h2 className='portalGallery__title'>Portal Gallery</h2>
            <header className='portalGallery__header'>
                {
                    PORTAL_GALLERY_OPTIONS.map((data, index) => (
                        <span className='portalGallery__filterWrapper' key={index}>
                            <h3 className={selectedFilter == index ? 'portalGallery__filter' : 'portalGallery__filter unselected'} onClick={() => handleFilterOnClick(index)}>{data.title}</h3>
                            {selectedFilter == index ? <span className='portalGallery__dot' /> : <></>}
                        </span>
                    ))
                }
            </header>
            <section className='portalGallery__content'>
                {
                    PORTAL_GALLERY_OPTIONS[selectedFilter].content.map((data, index) => (
                    <>
                        <div className='portalGallery__textSide' key={index}>
                            <h1>{data.title}</h1>
                            <h4>
                            {data.started} - {data.stillPresent ? 'Present' : data.finished} {data.website}
                            </h4>
                            <p>{data.paragraph}</p>
                            <section className='portalGallery__tags'>
                                {data.tags?.map((tag, tagIndex) => (
                                    <h5 key={tagIndex} className='portalGallery__tag'>{tag}</h5>
                                ))}
                            </section>
                        </div>
                        <figure className='portalGallery__imageSide'>
                            <img src={arrow} alt='arrow left' className='portalGallery__arrow left'/>
                            <div className='portalGallery__frameWrapper'>
                                <img className='portalGallery__image' src={data.image} alt='Project Image' />
                            </div>
                            <img src={arrow} alt='arrow right' className='portalGallery__arrow right'/>
                        </figure>
                    </>
                    ))
                }
            </section>
        </section>
    )
}