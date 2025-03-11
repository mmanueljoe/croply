
import "./BuyerSignUp.css";
import "./BuyerSignUp.css";
import assets from "../../assets";
import { Link } from "react-router-dom";
// import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const BuyerSignUp = () => {
    const [formData, setFormData] = useState({ fullName: "", phone: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required";
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number";
        if (!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted", formData);
        }
    };

    return (
        <>
            <div className="buyer-signup-container">
                <div className="buyer-left-col">
                    <h1>Croply</h1>
                    <img src={assets.woman} alt="Buyer SignUp" />
                </div>

                <div className="buyer-right-col">
                    <h3>Create Account</h3>
                    {/* Google & Facebook Sign-up Buttons */}
                    <div className="buyer-btns">
                        <button className="google-btn">
                            <img src={assets.googleLogo} alt="Google Logo" className="social-logo" />
                            Sign up with Google
                        </button>
                        <button className="facebook-btn">
                            <img src={assets.facebookLogo} alt="Facebook Logo" className="social-logo" />
                            Sign up with Facebook
                        </button>
                    </div>

                    <p className="or">-OR-</p>
                    <form className="buyer-form" onSubmit={handleSubmit}>
                        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                        {errors.password && <span className="error">{errors.password}</span>}
                        <input type="submit" value='Create Account' />
                    </form>
                    <Link to="/login/buyer">Already have an account? <span>Login</span></Link>
                </div>
            </div>
        </>
    )
}

export default BuyerSignUp