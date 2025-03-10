import { NavLink, Outlet } from 'react-router-dom';
import './FarmerDashboard.css';
import assets from '../../assets';

const FarmerDashboard = () => {
  return (
    <>
        <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-left">
          {/* <img src={assets.logo} alt="Croply Logo" className="logo" /> */}
          <span>Croply</span>
        </div>
        <div className="nav-right">
          <img src={assets.userIcon} alt="User Profile" className="user-icon" />
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <NavLink to="/farmer/home" end>Home</NavLink>
        <NavLink to="/farmer/listings">Listings</NavLink>
        <NavLink to="/farmer/market-prices">Market Prices</NavLink>
        <NavLink to="/farmer/resources">Resources</NavLink>
        <NavLink to="/farmer/community">Community</NavLink>
        <NavLink to="/logout">Sign Out</NavLink>
      </nav>

      {/* Dashboard Content */}
      <main className="dashboard-content">
        <Outlet /> {/* This will render nested routes */}
      </main>
    </div>
    </>
  )
}

export default FarmerDashboard