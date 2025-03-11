import { NavLink, Outlet, Link } from 'react-router-dom';
import './BuyerDashboard.css';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import SignOutModalBuyer from '../../components/SignOutModalBuyer/SignOutModalBuyer';

const BuyerDasboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSignOut = () => {
    console.log("User signed out!");
    setModalOpen(false);
  };
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
              <li><NavLink to="orders">Orders</NavLink></li>
              <li><NavLink to="market-prices">Market Prices</NavLink></li>
              <li><NavLink to="resources">Resources</NavLink></li>
              <li><NavLink to="community">Community</NavLink></li>
              <li><button className="sign-out" onClick={() => setModalOpen(true)}>Sign Out</button></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <Outlet /> {/* For nested routes */}
        </main>

        {/* Sign Out Modal */}
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