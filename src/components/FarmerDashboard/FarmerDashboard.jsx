import { NavLink, Outlet, Link } from 'react-router-dom';
import './FarmerDashboard.css';
import { useState, useEffect } from 'react';
import { 
  FaUser,
  FaHome,
  FaList,
  FaChartLine,
  FaBook,
  FaUsers,
  // FaSignOutAlt
} from 'react-icons/fa';
import { TbArrowLeftToArc } from "react-icons/tb";

const FarmerDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileLinks = [
    { path: "", name: "Home", icon: <FaHome /> },
    { path: "listings", name: "Listings", icon: <FaList /> },
    { path: "market-prices", name: "Prices", icon: <FaChartLine /> },
    { path: "resources", name: "Resources", icon: <FaBook /> },
    { path: "community", name: "Community", icon: <FaUsers /> },
    { path: "me", name: "Me", icon: <FaUser /> },
  ];
  return (
    <>
      <div className="fa-dashboard-container">
      {/* Top Navbar (Hidden on mobile) */}
      {!isMobile && (
        <nav className="fa-dashboard-nav">
          <div className="fa-nav-left">
            <Link to='' className='fa-logo-link'>
              <span className="fa-logo">Croply</span>
            </Link>
          </div>
          <div className="fa-nav-right">
            <FaUser className="fa-profile-icon" />
          </div>
        </nav>
      )}

       {/* Mobile Top Nav - ADD THIS */}
       {isMobile && (
        <nav className="fa-mobile-top-nav">
          <span className="fa-mobile-logo">Croply</span>
        </nav>
      )}

      <main className="fa-dashboard-main">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside className="fa-dashboard-sidebar">
            <nav className="fa-sidebar-nav">
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
              </ul>
              <button className="fa-sign-out">
                <TbArrowLeftToArc className='fa-sign-icon'/>
                Sign Out
              </button>
            </nav>
          </aside>
        )}

        {/* Mobile Bottom Navbar */}
        {isMobile && (
          <nav className="fa-mobile-nav">
            {mobileLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        )}
        <div className="page">
          <Outlet />
        </div>
        
      </main>
    </div>
    </>
  )
}

export default FarmerDashboard