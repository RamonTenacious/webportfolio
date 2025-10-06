import './PortalGallery.css';

export const PortalGallery = () => {
    return (
        <section className='portalGallery' id='portalGallery'>
            <h2 className='portalGallery__title'>Portal Gallery</h2>
            <div>
                <h4>Professional Experiences</h4>
                <h4>Personal Projects</h4>
            </div>
            <div className='portalGallery__content'>
                <h1>Quasar</h1>
                <h5>2024 - Present quasarcorp.com</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla metus, tincidunt vitae risus id, rutrum posuere nisl. 
                    Nam mollis cursus massa, vitae rhoncus neque aliquam a. Ut finibus massa nisi, sed sollicitudin elit elementum ut.
                </p>
                <section className='portalGallery__tags'>
                    <div className='portalGallery__tagsWrapper'>
                        <h5>Frontend</h5>
                    </div>
                </section>
            </div>
        </section>
    )
}