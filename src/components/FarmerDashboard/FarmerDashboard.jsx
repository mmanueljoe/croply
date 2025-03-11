import { NavLink, Outlet, Link } from 'react-router-dom';
import './FarmerDashboard.css';
import { FaUser } from 'react-icons/fa';

const FarmerDashboard = () => {
  return (
    <>
      <div className="dashboard-container">
      {/* Top Navbar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <Link to='' className='logo-link'>
            <span className="logo">Croply</span>
          </Link>
        </div>
        <div className="nav-right">
          <FaUser className="profile-icon" />
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li><NavLink to="listings">Listings</NavLink></li>
            <li><NavLink to="market-prices">Market Prices</NavLink></li>
            <li><NavLink to="resources">Resources</NavLink></li>
            <li><NavLink to="community">Community</NavLink></li>
            <li><button className="sign-out">Sign Out</button></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <Outlet /> {/* For nested routes */}
      </main>
    </div>
    </>
  )
}

export default FarmerDashboard