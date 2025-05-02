import { useState } from 'react';
import aiLogo from '../assets/images/ai-logo.png'; 
import tractor from "../assets/images/trac1.png";
import plow from "../assets/images/plow2.png";
import leveller from "../assets/images/levell3.png";
import seedDrill from "../assets/images/seeddrill4.png";
import seeder from "../assets/images/seeder5.png";
import transplanter from "../assets/images/planter6.png";
import harvester from "../assets/images/harvester7.png";
import reaper from "../assets/images/reaper8.png";
import thresher from "../assets/images/thresh9.png";
import "../pages/machinery.css";

export const Machinery = () => {
    return (
        <>
            {/* Header Section */}
            <section className="heads">
                <div className="sub">
                    <div className="agro-input-container">
                        <span className="agro-icon">&lt;</span>
                        <h1 className="head">Machinery</h1>
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

            <div className="main">
  {/* Land Preparation and Soil Cultivation */}
  <section className="main__container">
    <p className="subheader__container">Land Preparation and Soil Cultivation</p>
    <div className="main__cards">
      {[
        {
          img: tractor,
          title: "Tractor",
          desc: "Multi-purpose machines used for plowing,<br/>harrowing, planting, and transporting goods."
        },
        {
          img: plow,
          title: "Plow",
          desc: "Used to loosen soil (e.g., disc plows,<br/>moldboard plows, chisel plows)."
        },
        {
          img: leveller,
          title: "Leveller",
          desc: "Flattens land for uniform irrigation and<br/> planting."
        }
      ].map((item, idx) => (
        <div key={idx} className="main__card-card-flex">
          <img className="card-img" src={item.img} alt={item.title} />
          <div className='sub_cards-flex'>
            <h3 className="tr">{item.title}</h3>
            <p
              className="par"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
            <button className="btn">Read more</button>
          </div>
          </div>
      ))}
    </div>
  </section>

  {/* Planting and Sowing */}
  <section className="main__container">
    <p className="subheader__container">Planting and Sowing</p>
    <div className="main__cards">
      {[
        {
          img: seedDrill,
          title: "Seed Drill",
          desc: "Plants seeds at equal spacing<br/>and depth."
        },
        {
          img: seeder,
          title: "Broadcaster Seeder",
          desc: "Scatters seeds across a<br/>wide area."
        },
        {
          img: transplanter,
          title: "Transplanter",
          desc: "Used for planting rice<br/>and vegetable seedlings."
        }
      ].map((item, idx) => (
        <div key={idx} className="main__card-card-flex">
          <img className="card-img" src={item.img} alt={item.title} />
          <div className='sub_cards-flex'>
            <h3 className="tr">{item.title}</h3>
            <p
              className="par"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
            <button className="btn">Read more</button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Harvesting */}
  <section className="main__container">
    <p className="subheader__container">Harvesting</p>
    <div className="main__cards">
      {[
        {
          img: harvester,
          title: "Combine Harvester",
          desc: "Harvests and threshes grains<br/>like wheat, rice, and maize."
        },
        {
          img: reaper,
          title: "Reaper",
          desc: "Cuts crops like wheat,<br/>barley, and rice."
        },
        {
          img: thresher,
          title: "Threshers",
          desc: "Separates grains from<br/>husks and stalks."
        }
      ].map((item, idx) => (
        <div key={idx} className="main__card-card-flex">
          <img className="card-img" src={item.img} alt={item.title} />
          <div className='sub_cards-flex'>
            <h3 className="tr">{item.title}</h3>
            <p
              className="par"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
            <button className="btn">Read more</button>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>
     </>
    );
};
