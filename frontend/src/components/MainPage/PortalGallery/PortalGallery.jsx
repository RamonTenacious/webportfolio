import './PortalGallery.css';
import arrow from '../../../assets/images/icons/arrow.png';
import { PORTAL_GALLERY_OPTIONS } from '../../../constants/portalGalleryOptions';
import { useState } from 'react';


export const PortalGallery = () => {
    const [selectedFilter, setSelectedFilter] = useState(0);

    const handleFilterOnClick = (id) => {
        setSelectedFilter(id);
    }

    return (
        <section className='portalGallery' id='portalGallery'>
            <h2 className='portalGallery__title appearAnimation'>Portal Gallery</h2>
            <header className='portalGallery__header'>
                {
                    PORTAL_GALLERY_OPTIONS.map((data, index) => (
                        <span className='portalGallery__filterWrapper appearAnimation' key={index}>
                            <h3 className={selectedFilter == index ? 'portalGallery__filter appearAnimation' : 'portalGallery__filter unselected appearAnimation'} onClick={() => handleFilterOnClick(index)}>{data.title}</h3>
                            {selectedFilter == index ? <span className='portalGallery__dot appearAnimation' /> : <></>}
                        </span>
                    ))
                }
            </header>
            <section className='portalGallery__wrap'>
                {
                    PORTAL_GALLERY_OPTIONS[selectedFilter].content.map((data, index) => (
                        <div className='portalGallery__content' key={index}>
                            <div className='portalGallery__textSide'>
                                <h1 className='appearAnimation'>{data.title}</h1>
                                <h4 className='appearAnimation'>
                                {data.started} - {data.stillPresent ? 'Present' : data.finished} {data.website}
                                </h4>
                                <p className='appearAnimation'>{data.paragraph}</p>
                                <section className='portalGallery__tags appearAnimation'>
                                    {data.tags?.map((tag, tagIndex) => (
                                        <h5 key={tagIndex} className='portalGallery__tag'>{tag}</h5>
                                    ))}
                                </section>
                            </div>
                            <figure className='portalGallery__imageSide appearAnimation'>
                                <div className='portalGallery__frameWrapper'>
                                    <img className='portalGallery__image' src={data.image} alt='Project Image' />
                                </div>
                            </figure>
                        </div>
                    ))
                }
            </section>
        </section>
    )
}