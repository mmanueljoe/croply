import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTiktok,
    faLinkedinIn,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribeClick = () => {
        setIsSubscribed(true);
    };

    return (
        <footer id='contact'>
            <div className='footer-logo'>
                <Link to={'/'}>
                    <h1>Croply</h1>
                </Link>
                <p>Farm Smarter, Trade Better</p>
                <div className="social-links">
                    <Link to="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faTiktok} />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link to="#">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </div>
            </div>
            <hr className='divide-hr' />

            <div className='contact-footer'>
                <div className='contact-footer-info'>
                    <h2>Contact Us!</h2>
                    <div className='contact-mail contact-info'>
                        <Link>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                        <span>Croply@gmail.com</span>
                    </div>
                    <div className='contact-phone contact-info'>
                        <Link>
                            <FontAwesomeIcon icon={faPhone} />
                        </Link>
                        <span>0556894226 / 0321080284</span>
                    </div>
                </div>

                <div className='contact-footer-links'>
                    <h2>Links</h2>
                    <ul className="footer-links">
                        <li className="footer-link-item">
                            <Link to="/" className="footer-link">Home</Link>
                        </li>
                        <li className="footer-link-item">
                            <Link to="/about" className="footer-link">About Us</Link>
                        </li>
                        <li className="footer-link-item">
                            <Link to="/faqs" className="footer-link">FAQs</Link>
                        </li>
                        <li className="footer-link-item">
                            <Link to="/contact" className="footer-link">Contact</Link>
                        </li>
                        <li className="footer-link-item">
                            <Link to="/blog" className="footer-link">Blog</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='subscribe-title'>Subscribe to our Newsletter</h2>
                    <div className={`subscribe-container ${isSubscribed ? 'active' : ''}`}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="subscribe-input"
                            style={{ display: isSubscribed ? 'block' : 'none' }}
                        />
                        <button className="subscribe-btn" onClick={handleSubscribeClick}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <hr className='divide-hr' />

            <div className='copyright'>
                <p>&copy; Copyright 2025.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
