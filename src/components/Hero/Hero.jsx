

import assets from '../../assets'; // Adjust the path as necessary
import './Hero.css';
const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-img'>
          <img src={assets.heroImg} alt="" />
        </div>
        <div className='hero-content'>
          <h1>Croply</h1>
          <h2>Farm Smarter, Trade Better</h2>
          <p>Empowering farmers, connecting buyers—Croply makes farming smarter and trading seamless.</p>
          <button>Learn More</button>
        </div>
      </div>
    </>
  )
}

export default Hero