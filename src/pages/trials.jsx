import { useState } from 'react';
import "../pages/trials.css";
import superImage from "../assets/images/super.png";
import last from "../assets/images/last.png";
import agrow from "../assets/images/agrow.png";   



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
                <input type="text" placeholder="" />
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
              D.I Grow is a liquid foliar fertilizer designed to enhance plant <br/> growth and improve soil quality. <br/>
              It contains a blend of <br /> marcronutrients (such as nitrogen, phosphorus, potassium, and <br /> magnesium), micronutrients (including iron, maganesse, copper, <br /> zinc, boron, and molybdenum), and humic acid. <br />
              This combination supports various crops, including vegetables, <br /> fruits, and flowers. <span className='com'>cedargro.com</span> <br />
              <button className='read'>Read more</button>
            </p>
          </div>
        </div>
      </section>
      {/* SECOND CARD */}
       <section className="more-info">
        <div className="card">
            <img src={superImage} alt="" />
          <div className="texts">
            <h1 className='sub-head'>SUPER GRO</h1>
            <p className='content'>
              Super Gro is an organic liquid fertilizer formulated from poultry <br /> droppings and seabird guano. it's designed to enhance soil <br />
              fertility and promote healthy plant growth. Super Gro acts as a <br /> surfacant, reducing the surface tension of the water,which allows <br />
              for better water penetration and nutrient absorption by plants. <br /> <span className='com'>agric4profits.com</span> <br />
              <button className='read'>Read more</button>
            </p>
          </div>
        </div>
      </section>

    {/* Third CArd */}
    <section className="more-info">
        <div className="card">
            <img src={agrow} alt="" />
          <div className="texts">
            <h1 className='sub-head'>ALGIFOL</h1>
            <p className='content'>
            Algifol is an organic biostimultant derived from brown algae. <br />
            Through a special process, it concentrates trace elements, <br />
            vitamins, enzymes, amino acid, and plant hormones that <br />
            promote natural growth regulation. Algifol is suitable for a <br />
            wide range of plants, including soft fruits, fruit trees, vegetables, <br />
            flowers, and grains. <span className='com'>greenfertilizersghana.com</span> <br />
              <button className='read'>Read more</button>
            </p>
          </div>
        </div>
      </section>


      {/* Fourth Card */}
      <section className="more-info">
        <div className="card">
            <img src={last} alt=""  className='last'/>
          <div className="texts">
            <h1 className='sub-head'>PROTIFERT</h1>
            <p className='content'>
            ProtiFert is a certified organic liquid fertilizer designed to <br />
            boost plant vitality. it's suitable for a variety of crops, including <br />
            vegetables, fruits, and ornamentals. ProtiFert enhances soil <br />
            fertility and promotes healthy plant growth. <br /> greenfertilizersghana.com <br />

              <button className='read'>Read more</button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
