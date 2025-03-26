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
import { SlPeople } from "react-icons/sl";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TbArrowLeftToArc } from "react-icons/tb";
import ProfileModal from '../ProfileModal/ProfileModal';
import SignOutModalFarmer from '../SignOutModalFarmer/SignOutModalFarmer';
import { useNavigate } from 'react-router-dom';

const FarmerDashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const navigateToHome = useNavigate();

  const handleSignOut = () => {
    navigateToHome('/');
    setModalOpen(false);
  };

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
            <Link to='/farmer/dashboard' className='fa-logo-link'>
              <span className="fa-logo">Croply</span>
            </Link>
          </div>
          <div className="fa-nav-right">
            <FaUser 
              className="fa-profile-icon"
              onClick={() => setProfileOpen(!isProfileOpen)}
              />
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
                    <GoHome className='fa-home-icon fa-icon'/>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="listings">
                    <GoTasklist className='fa-list-icon fa-icon'/>
                    Listings
                  </NavLink>
                </li>
                <li><NavLink to="market-prices"> <LuChartNoAxesCombined className='fa-market-icon fa-icon'/> Market Prices</NavLink></li>
                <li><NavLink to="resources">
                  <GiPlantsAndAnimals className='fa-resources-icon fa-icon'/>
                  Resources
                </NavLink></li>
                <li><NavLink to="community">
                  <SlPeople className='fa-community-icon fa-icon' />
                  Community
                  </NavLink>
                </li>
              </ul>
              <button className="fa-sign-out" onClick={() => setModalOpen(true)}>
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

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setProfileOpen(false)}
      />

    <SignOutModalFarmer
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)} 
      onConfirm={handleSignOut}
    />
    </div>
    </>
  )
}

export default FarmerDashboard