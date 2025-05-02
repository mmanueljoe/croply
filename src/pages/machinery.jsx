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
      fullDesc: "Multi-purpose machines used for plowing,<br/>harrowing, planting, and transporting goods.<br/><br/>Verdant Agro and Allied Services<br/><ul><li>Overview: Offers machinery rental<br/>services that have been praised for reliability and efficiency.<br/><br/><li>Website:<br/>Hire Agro Machine | Modern Farm<br/>Equipment | Verdant Agro<ul/>"
    },
    {
      img: plow,
      title: "Plow",
      desc: "Used to loosen soil (e.g., disc plows,<br/>moldboard plows, chisel plows).",
      fullDesc: "(e.g., disc plows, moldboard plows, chisel<br/>plows)<br/><br/>Used to turn loosen the soil.<br/><br/><br/>GGF Rentals<br/><ul><li>Overview: Provides a top-quality rental<br/>fleet from industry-leading manufacturers,<br/>catering to farming, forestry, construction,<br/>and material handling sectors<br/><br/><li>Website: https://ggf-rentals.com/"
    },
    {
      img: leveller,
      title: "Leveller",
      desc: "Flattens land for uniform irrigation and<br/> planting.",
      fullDesc: "Flattens land for uniform irrigation and<br/>planting.<br/><br/>Comfart Machinery Ltd<br/><ul><li>Overview: A leading provider of<br/>heavy-duty equipment rentals in Ghana,<br/>offering machinery for construction,<br/>mining, agriculture, and material handling.<br/><br/><li>Website: https://comfart.com/"
    }
  ];

  const plantingTools = [
    {
      img: seedDrill,
      title: "Seed Drill",
      desc: "Plants seeds at equal spacing<br/>and depth.",
      fullDesc: "Plants seeds at equal spacing and depth.<br/><br/>TROTRO Tractor<br/><ul><li>Overview: Utilizes technology to make<br/>agricultural mechanization services<br/>available, accessible, and affordable for<br/>smallholder farmers.<br/><br/><li>Website: https://www.trotrotractor.com/"
    },
    {
      img: seeder,
      title: "Broadcaster Seeder",
      desc: "Scatters seeds across a<br/>wide area.",
      fullDesc: "scatters seeds across a wide area.<br/><br/><br/>Asanduff Trucking, Hauling, and Equipment<br/>Rental Services<br/><ul><li>Overview: Maintains a fleet of heavy civil<br/>construction equipment, including tractors,<br/>available for rent.<br/><br/><li>Website:<br/>https://www.asanduff.com/asanduff-<br/>trucking-hauling-and-equipment-rental-<br/>services/"
    },
    {
      img: transplanter,
      title: "Transplanter",
      desc: "Used for planting rice<br/>and vegetable seedlings.",
      fullDesc: "Used for planting rice and vegetable<br/>seedlings.<br/><br/>African Heavy Machinery Services<br/><ul><li>Overview: Provides excavators, bulldozers,<br/>trucks, graders, and other heavy<br/>machinery for rental and sale.<br/><br/><li>Website:<br/>https://www.africanmachinery.com/"
    }
  ];

  const harvestingTools = [
    {
      img: harvester,
      title: "Combine Harvester",
      desc: "Harvests and threshes grains<br/>like wheat, rice, and maize.",
      fullDesc: "Harvests and threshes grains like wheat,<br/>rice, and maize.<br/><br/>African Heavy Machinery Services<br/><ul><li>Overview: Provides excavators, bulldozers,<br/>trucks, graders, and other heavy<br/>machinery for rental and sale.<br/><br/><li>Website:<br/>https://www.africanmachinery.com/"
    },
    {
      img: reaper,
      title: "Reaper",
      desc: "Cuts crops like wheat,<br/>barley, and rice.",
      fullDesc: "Cuts crops like wheat, barley, and rice.<br/><br/>African Heavy Machinery Services<br/><ul><li>Overview: Provides excavators, bulldozers,<br/>trucks, graders, and other heavy<br/>machinery for rental and sale.<br/><br/><li>Website:<br/>https://www.africanmachinery.com/"
    },
    {
      img: thresher,
      title: "Threshers",
      desc: "Separates grains from<br/>husks and stalks.",
      fullDesc: "Separates grains from husks and stalks.<br/><br/>African Heavy Machinery Services<br/><ul><li>Overview: Provides excavators, bulldozers,<br/>trucks, graders, and other heavy<br/>machinery for rental and sale.<br/><br/><li>Website:<br/>https://www.africanmachinery.com/"
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
            {/* <h3>{modalData.title}</h3> */}
            <img src={modalData.img} alt={modalData.title} className="modal-img" />
            <p dangerouslySetInnerHTML={{ __html: modalData.fullDesc }} />
            <button onClick={() => setModalData(null)} className="btn">X</button>
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
