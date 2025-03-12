import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import SignupModal from "../SignupModal/SignupModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <div className="nav-container">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>
        
        {/* Logo */}
        <h1 className="logo">Croply</h1>

        {/* Nav Links */}
        <nav className={isOpen ? "nav-links open" : "nav-links"}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li className="dropdown">
              <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Services</span>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/services#farmer" onClick={() => setIsOpen(false)}>Farmer</Link></li>
                  <li><Link to="/services#buyer" onClick={() => setIsOpen(false)}>Buyer</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/marketplace" onClick={() => setIsOpen(false)}>Marketplace</Link></li>
            <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        
        {/* Sign-up Button */}
        <button className="sign-up-btn" onClick={() => setIsModalOpen(true)}>Sign up</button>
        <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Overlay */}
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
      </div>
    </header>
  );
};

export default Navbar;