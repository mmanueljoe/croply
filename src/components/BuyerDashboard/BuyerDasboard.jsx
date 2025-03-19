import { NavLink, Outlet, Link } from 'react-router-dom';
import './BuyerDashboard.css';
import { FaUser, FaHome, FaChartLine, FaShoppingCart, FaList } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import SignOutModalBuyer from '../../components/SignOutModalBuyer/SignOutModalBuyer';
import { TbArrowLeftToArc } from "react-icons/tb";
import ProfileModal from '../ProfileModal/ProfileModal';


const BuyerDasboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileLinks = [
    { path: "", name: "Home", icon: <FaHome /> },
    { path: "market-prices", name: "Prices", icon: <FaChartLine /> },
    { path: "marketplace", name: "Market", icon: <FaShoppingCart /> },
    { path: "orders", name: "Orders", icon: <FaList /> },
  ];

  const handleSignOut = () => {
    console.log("User signed out!");
    setModalOpen(false);
  };

  return (
    <>
      <div className="bu-dashboard-container">
      {/* Desktop Top Nav */}
      {!isMobile && (
        <nav className="bu-dashboard-nav">
          <div className="bu-nav-left">
            <Link to='' className='bu-logo-link'>
              <span className="bu-logo">Croply</span>
            </Link>
          </div>
          <div className="bu-nav-right">
            <FaUser 
              className="bu-profile-icon" 
              onClick={() => setProfileOpen(!isProfileOpen)}
            />
          </div>
        </nav>
      )}

      {/* Mobile Top Nav */}
      {isMobile && (
        <nav className="bu-mobile-top-nav">
          <span className="bu-mobile-logo">Croply</span>
        </nav>
      )}

      <main className="bu-dashboard-main">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside className="bu-dashboard-sidebar">
            <nav className="bu-sidebar-nav">
              <ul>
                <li>
                  <NavLink to="" end className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                  </NavLink>
                </li>
                <li><NavLink to="market-prices">Market Prices</NavLink></li>
                <li><NavLink to="marketplace">Marketplace</NavLink></li>
                <li><NavLink to="orders">Orders</NavLink></li>
              </ul>
              <button className="bu-sign-out" onClick={() => setModalOpen(true)}>
                <TbArrowLeftToArc className='bu-sign-icon'/>
                Sign Out
              </button>
            </nav>
          </aside>
        )}

        {/* Mobile Bottom Navbar */}
        {isMobile && (
          <nav className="bu-mobile-nav">
            {mobileLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => `bu-mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        )}

        <div className="bu-page">
          <Outlet />
        </div>
      </main>

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setProfileOpen(false)}
      />

      <SignOutModalBuyer 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={handleSignOut}
      />
    </div>
    </>
  )
}

export default BuyerDasboard