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
                    Croply is a digital platform designed to empower farmers and buyers in Ho and beyond. We provide real-time market 
information, agricultural insights, and a vibrant community to help you succeed. Whether you’re a farmer 
looking to sell your produce or a buyer seeking quality crops, Croply is your one-stop solution 
for smarter farming and seamless trading.
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