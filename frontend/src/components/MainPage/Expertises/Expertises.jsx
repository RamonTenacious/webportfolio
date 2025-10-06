import './Expertises.css'

export const Expertises = () => {
    const options = [
        {
            title: "Frontend",
            content: "React, Next, Javascript, HTML, CSS"
        },
        {
            title: "Backend",
            content: "Python, Django"
        },
        {
            title: "Others",
            content: "AWS, Figma"
        }
    ]

    return (
        <section id='expertises' className='expertises'>
            <div className='expertises__inner'>
                <header className='expertises__header'>
                    <h2 className='expertises__title'>Expertises</h2>
                    <h6 className='expertises__subtitle'>Started my journey at 16 years old...</h6>
                </header>
                <div className='expertises__contentWrapper'>
                {
                    options.map((data, index) => (
                        <div key={index} className='expertises__content'>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}