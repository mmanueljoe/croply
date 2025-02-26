import './About.css';
import assets from '../../assets';

const About = () => {
    return (
        <>
            <div className='about-container'>
                <h1>
                    About Us
                </h1>
                <div className='about-content'>
                    <h2>What is Croply?</h2>
                    <p>
                        Croply connects farmers and buyers with real-time market insights and a thriving community. Buy, sell, and trade smarter—seamlessly
                    </p>
                </div>
                <div className='about-img'>
                    <div className='about-img-man'>
                        <img src={assets.man} alt="" />
                    </div>
                    <div className='arrow'>

                    </div>
                    <div className='about-img-lady'>
                        <img src={assets.lady} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About