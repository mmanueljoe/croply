import "./FarmerSignUp.css";
import assets from "../../assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";  // Import useState for managing state

const FamerSignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const navigateToFarmerLogin = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigateToFarmerLogin("/login/farmer");
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle password visibility
    }

    return (
        <>
            <div className="farmer-signup-container">
                <div className="fam-left-col">
                    <h1>Croply</h1>
                    <img src={assets.man} alt="" />
                </div>

                <div className="fam-right-col">
                    <h3>Create Account</h3>
                    <div className="farmer-btns">
                        <button>
                            <img src={assets.googleLogo} alt="Google Logo" className="social-logo" />
                            Sign up with Google
                        </button>
                        <button>
                            <img src={assets.facebookLogo} alt="Facebook Logo" className="social-logo" />
                            Sign up with Facebook
                        </button>
                    </div>
                    <p className="or">-OR-</p>
                    <form className="fam-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" />
                        <input type="tel" placeholder="Phone Number" />

                        {/* Password input field with visibility toggle */}
                        <div className="password-container">
                            <input
                                type={passwordVisible ? "text" : "password"} // Conditionally render the password type
                                placeholder="Password"
                                className="password-input"
                            />
                            {/* Font Awesome icon for password visibility toggle */}
                            <i
                                className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`} // Toggle between eye and eye-slash
                                onClick={togglePasswordVisibility} // Toggle visibility on click
                                aria-hidden="true"
                                style={{ cursor: "pointer" }}
                            />
                        </div>

                        <input type="submit" value='Create Account' />
                    </form>
                    <Link to="/login/farmer">
                        Already have an account? <span>Login</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FamerSignUp;
