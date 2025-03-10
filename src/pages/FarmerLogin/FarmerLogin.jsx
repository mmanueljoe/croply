import "./FarmerLogin.css";
import { Link } from "react-router-dom";
import assets from "../../assets";

const FarmerLogin = () => {
  return (
    <>
        <div className="farmer-login-container">
            <div className="login-left">
                <h2>Welcome Back!</h2>
                <p>Login</p>
                <form action="" className="login-form">
                  <input type="text" placeholder="Full Name"/>
                  <div className="passwd-input">
                  <input type="text" placeholder="Password"/>
                      <Link>
                        Forgot Password?
                      </Link>
                  </div>
                   
                  <input type="submit" value="Login"/>
                </form>
                <Link className="already">
                    Already have an account? <span>Sign up</span>
                </Link>
            </div>
            <div className="login-right">
              <h1>Croply</h1>
              <img src={assets.man} alt="" />
            </div>
        </div>
    </>
  )
}

export default FarmerLogin