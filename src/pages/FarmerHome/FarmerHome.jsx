import { NavLink } from "react-router-dom";
import { services } from "../../data/services";
// import { FaLeaf } from "react-icons/fa";
import "./FarmerHome.css";
import assets from "../../assets";

const FarmerHome = () => {
  return (
    <div className="dashboard-home">
      {/* Header Section */}
      <div className="dashboard-header">
        <div>
          <h1>Hello, John Doe</h1>
          <p>Welcome to Croply Platform</p>
        </div>
        <NavLink to="/croply-ai" className="ai-logo">
          {/* <FaLeaf size={40} /> */}
          <img src={assets.ai_logo} alt="" />
          <p>CroplyAI</p>
        </NavLink>
      </div>

      {/* Stats Grid */}
      <div className="stat-container">
      <div className="stats-grid">
        <div className="stat-box">
          <h3>Number of Active Listings</h3>
          <p>12</p>
        </div>
        <div className="stat-box">
          <h3>Total Sales</h3>
          <p>$4,560</p>
        </div>
        <div className="stat-box">
          <h3>Buyer Inquiries</h3>
          <p>8</p>
        </div>
        <div className="stat-box">
          <h3>Weather</h3>
          <p>24°C Sunny</p>
        </div>
      </div>
      </div>
     

      {/* Additional Stats */}
      {/* <div className="additional-stats">
        <h3>Monthly Performance</h3>
        
      </div> */}

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img 
                src={service.image} // Access asset through imported object
                alt={service.title}
                className="service-image"
              />
              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerHome;