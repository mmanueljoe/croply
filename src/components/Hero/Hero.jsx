

import { useNavigate } from 'react-router-dom';
import assets from '../../assets'; // Adjust the path as necessary
import './Hero.css';
const Hero = () => {
  const navigateToLearnMore = useNavigate();
  return (
    <>
      <div className='hero-container' id='home'>
        <div className='hero-img'>
          <img src={assets.heroImg} alt="" />
        </div>
        <div className='hero-content'>
          <h1>Croply</h1>
          <h2>Farm Smarter, Trade Better</h2>
          <p>At Croply, we’re revolutionizing the way farmers and buyers connect. Our digital platform 
is designed to empower farmers in Ho and beyond with the tools, information, and 
resources they need to thrive in today’s agricultural marketplace. Whether you’re a farmer 
looking to sell your produce or a buyer seeking quality crops, Croply is your one-stop solution 
for smarter farming and seamless trading.</p>
          <button onClick={() => navigateToLearnMore("/learn-more")}>
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero