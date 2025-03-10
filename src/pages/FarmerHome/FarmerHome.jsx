import { NavLink } from "react-router-dom";
import assets from "../../assets";
import { services } from "../../data/services";

const FarmerHome = () => {
  return (
    <>
        <div className="home-content">
      {/* Header Section */}
      <div className="home-header">
        <div>
          <h1>Hello, Theresa</h1>
          <p>Welcome to Croply Platform</p>
        </div>
        <NavLink to="/farmer/ai" className="ai-logo">
          <img src={assets.aiLogo} alt="Croply AI" />
        </NavLink>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Active Listings</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>₦2,450,000</p>
        </div>
        <div className="stat-card">
          <h3>Buyer Inquiries</h3>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h3>Weather</h3>
          <p>24°C ☀️</p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="analytics-box">
        <h2>Monthly Sales Analytics</h2>
        {/* Add chart component here */}
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default FarmerHome