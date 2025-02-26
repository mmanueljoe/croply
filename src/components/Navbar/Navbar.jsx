import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="nav-container">
        <h1>Croply</h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>
        
        {/* Nav Links */}
        <nav className={isOpen ? "nav-links open" : "nav-links"}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)} className="active">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/marketplace" onClick={() => setIsOpen(false)}>Marketplace</Link></li>
            <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
          
        </nav>
        <button className="sign-up-btn">
            Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
