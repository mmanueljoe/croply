import "./BuyerLogin.css";
import { Link } from "react-router-dom";
import assets from "../../assets";
import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react"; // Eye icons for password visibility

const BuyerLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    <div className="buyer-login-container">
      <div className="login-left">
        <h2>Welcome Back!</h2>
        <p>Login</p>
        <form className="login-form">
          <input type="text" placeholder="Full Name" />
          
          <div className="passwd-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <input type="submit" value="Login" />
        </form>

        <Link className="already" to="/sign/buyer">
          Already have an account? <span>Sign up</span>
        </Link>
      </div>

      <div className="login-right">
        <h1>Croply</h1>
        <img src={assets.woman} alt="Buyer Login" />
      </div>
    </div>
    </>
  )
}

export default BuyerLogin