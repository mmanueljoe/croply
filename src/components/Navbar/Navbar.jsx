import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import SignupModal from "../SignupModal/SignupModal";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("no-scroll", !menuOpen)
  }

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents event from bubbling up
    setIsDropdownOpen(!isDropdownOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }
  const scrollToSection = (id, e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar')) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // Close dropdown when clicking outside
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
            Services{" "}
            {isDropdownOpen ? <IoIosArrowUp className="arrow" /> : <IoIosArrowDown className="arrow" />}
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