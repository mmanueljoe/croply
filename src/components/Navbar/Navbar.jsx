import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import SignupModal from "../SignupModal/SignupModal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN'); // Cleaned: Removed 'ES'
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Moved and fixed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("no-scroll", !menuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const scrollToSection = (id, e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar')) {
        closeMenu();
        setIsLanguageDropdownOpen(false);
      }
    };

    if (menuOpen || isLanguageDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, isLanguageDropdownOpen]);

  useEffect(() => {
    const handleClickOutsideDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutsideDropdown);
    } else {
      document.removeEventListener("click", handleClickOutsideDropdown);
    }

    return () => document.removeEventListener("click", handleClickOutsideDropdown);
  }, [isDropdownOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Croply
      </Link>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={(e) => scrollToSection("home", e)}>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => scrollToSection("marketplace", e)}>Marketplace</Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => scrollToSection("about", e)}>About</Link>
        </li>
        <li className="dropdown-container">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Services
            <span className="arrow-container">
              {isDropdownOpen ? <IoIosArrowUp className="arrow" /> : <IoIosArrowDown className="arrow" />}
            </span>
          </button>

          {isDropdownOpen && (
            <div className="dropdown">
              <Link to="/" onClick={(e) => { scrollToSection("farmer", e); setIsDropdownOpen(false); }}>
                Farmer
              </Link>
              <Link to="/" onClick={(e) => { scrollToSection("buyer", e); setIsDropdownOpen(false); }}>
                Buyer
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link to="/" onClick={(e) => scrollToSection('blog', e)}>Blog</Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => scrollToSection('contact', e)}>Contact</Link>
        </li>

        {/* Language Dropdown */}
        <li className="language-dropdown-container">
          <button className="language-toggle" onClick={() => setIsLanguageDropdownOpen(prev => !prev)}>
            {language} <IoIosArrowDown />
          </button>
          {isLanguageDropdownOpen && (
            <ul className="language-dropdown">
              <li onClick={() => setLanguage('EN')}>English</li>
              <li onClick={() => setLanguage('TWI')}>Twi</li>
              <li onClick={() => setLanguage('EWE')}>Ewe</li>
            </ul>
          )}
        </li>
      </ul>

      <button className="sign-up-btn" onClick={() => setIsModalOpen(!isModalOpen)}>Sign up</button>

      {/* hamburger */}
      <button className="hamburger" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
