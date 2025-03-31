import { useState } from 'react';
import "../pages/trials.css";
import agrow from "../assets/images/agrow.png";  // Correct way to import images


const aiLogo = new URL('../assets/images/ai-logo.png', import.meta.url).href;

export const Trials = () => {
  return (
    <>
      <section className="heads">
        <div className="sub">
          <div className="agro-input-container">
            <span className="agro-icon">&lt;</span> {/* Less-than symbol */}
            <h1 className="head">Agro Inputs</h1>
          </div>
          <div className="search-bar">
            <form action="">
              <div className="search-container">
                <input type="text" placeholder="Search Agro Inputs..." />
                <span className="search-icon">🔍</span>
              </div>
            </form>
          </div>
        </div>
        <div className="image">
          <img src={aiLogo} alt="CroplyAI Logo" />
          <p>CroplyAI</p>
        </div>
      </section>

      {/* Add additional sections or content here */}
      <section className="more-info">
        <div className="card">
            <img src={agrow} alt="" />
          <div className="texts">
            <h1 className='sub-head'>D.I AGROW</h1>
            <p className='content'>
              D.I Grow is a liquid foliar fertilizer designed to enhance plant growth and improve soil quality.
              It contains a blend of marcronutrients (such as nitrogen, phosphorus, potassium, and magnesium), micronutrients (including iron, maganesse, copper, zinc, boron, and molybdenum), and humic acid.
              This combination supports various crops, including vegetables, fruits, and flowers. cedargro.com
            </p>
          </div>
        </div>
      </section>
{/* 
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"CroplyAI helped me optimize my farming practices!"</p>
          <span>- John Doe, Farmer</span>
        </div>
        <div className="testimonial">
          <p>"The insights provided by Agro Inputs are invaluable."</p>
          <span>- Jane Smith, Agronomist</span>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section> */}
    </>
  );
};
