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
  const [modalData, setModalData] = useState(null);

  const landPreparationTools = [
    {
      img: tractor,
      title: "Tractor",
      desc: "Multi-purpose machines used for plowing,<br/>harrowing, planting, and transporting goods.",
      fullDesc: "Tractors are powerful vehicles designed to deliver high torque at slow speeds. They're used for pulling agricultural machinery or trailers and are vital in all farming operations."
    },
    {
      img: plow,
      title: "Plow",
      desc: "Used to loosen soil (e.g., disc plows,<br/>moldboard plows, chisel plows).",
      fullDesc: "Plows are farm tools used to break up the soil and prepare it for planting. They help aerate the soil and control weeds, playing a critical role in primary tillage."
    },
    {
      img: leveller,
      title: "Leveller",
      desc: "Flattens land for uniform irrigation and<br/> planting.",
      fullDesc: "Levellers are used to level agricultural land, ensuring even distribution of water and improved crop yields. They promote better seed germination and irrigation efficiency."
    }
  ];

  const plantingTools = [
    {
      img: seedDrill,
      title: "Seed Drill",
      desc: "Plants seeds at equal spacing<br/>and depth.",
      fullDesc: "Seed drills place seeds at a consistent depth and spacing, improving germination rates and reducing seed waste."
    },
    {
      img: seeder,
      title: "Broadcaster Seeder",
      desc: "Scatters seeds across a<br/>wide area.",
      fullDesc: "Broadcaster seeders are used for evenly distributing seeds over a large area quickly. Useful for pastures and cover crops."
    },
    {
      img: transplanter,
      title: "Transplanter",
      desc: "Used for planting rice<br/>and vegetable seedlings.",
      fullDesc: "Transplanters automate the process of planting seedlings, saving labor and ensuring uniform plant spacing."
    }
  ];

  const harvestingTools = [
    {
      img: harvester,
      title: "Combine Harvester",
      desc: "Harvests and threshes grains<br/>like wheat, rice, and maize.",
      fullDesc: "Combine harvesters streamline the process of reaping, threshing, and winnowing crops into a single operation."
    },
    {
      img: reaper,
      title: "Reaper",
      desc: "Cuts crops like wheat,<br/>barley, and rice.",
      fullDesc: "Reapers are machines used to cut cereal crops during harvest. They increase efficiency compared to manual harvesting."
    },
    {
      img: thresher,
      title: "Threshers",
      desc: "Separates grains from<br/>husks and stalks.",
      fullDesc: "Threshers are machines that separate edible grain from the inedible chaff. They significantly reduce labor and time in post-harvest processing."
    }
  ];

  const renderSection = (title, items) => (
    <section className="main__container">
      <p className="subheader__container">{title}</p>
      <div className="main__cards">
        {items.map((item, idx) => (
          <div key={idx} className="main__card-card-flex">
            <img className="card-img" src={item.img} alt={item.title} />
            <div className='sub_cards-flex'>
              <h3 className="tr">{item.title}</h3>
              <p className="par" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              <button className="btn" onClick={() => setModalData(item)}>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.title}</h3>
            <img src={modalData.img} alt={modalData.title} className="modal-img" />
            <p dangerouslySetInnerHTML={{ __html: modalData.fullDesc }} />
            <button onClick={() => setModalData(null)} className="btn">Close</button>
          </div>
        </div>
      )}

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
        {renderSection("Land Preparation and Soil Cultivation", landPreparationTools)}
        {renderSection("Planting and Sowing", plantingTools)}
        {renderSection("Harvesting", harvestingTools)}
      </div>
    </>
  );
};
