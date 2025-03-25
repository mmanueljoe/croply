import { NavLink } from "react-router-dom";
import { services } from "../../data/services";
import "./FarmerHome.css";
import assets from "../../assets";
import { farmerStat } from "../../data/farmerStat";

const FarmerHome = () => {
  return (
    <div className="fa-dashboard-home">
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
       <div className="fa-stat-container">
                  <div className="fa-stat-grid">
                      <div className="fa-stat-box">
                          <div className="fa-stat-title">Number of Listing</div>
                          <div className="fa-stat-value">{farmerStat.numberOfListing}</div>
                      </div>
                      <div className="fa-stat-box">
                          <div className="fa-stat-title">Total Sales</div>
                          <div className="fa-stat-value">{farmerStat.totalSales}</div>
                      </div>
                      <div className="fa-stat-box">
                          <div className="fa-stat-title">Buyer Enquiries</div>
                          <div className="fa-stat-value">{farmerStat.buyerEnquiries}</div>
                      </div>
                      <div className="fa-stat-box">
                          <div className="fa-stat-title">Weather</div>
                          <div className="fa-stat-value">{farmerStat.weather}</div>
                      </div>
                  </div>
      </div>
     

      {/* Services Section */}
      <div className="services-section">
        <h2>Services</h2>

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
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerHome;