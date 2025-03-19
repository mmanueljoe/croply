import "./FarmerLogin.css";
import { Link } from "react-router-dom";
import assets from "../../assets";
import { useNavigate } from "react-router-dom";

const FarmerLogin = () => {
  const navigateToFarmerDashboard = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigateToFarmerDashboard("/farmer/dashboard")
  }
  return (
    <>
        <div className="farmer-login-container">
            <div className="farmer-login-left">
                <h2>Welcome Back!</h2>
                <p>Login</p>
                <form action="" className="farmer-login-form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Full Name"/>
                  <div className="farmer-passwd-input">
                  <input type="text" placeholder="Password"/>
                      <Link>
                        Forgot Password?
                      </Link>
                      
                  </div>
                   
                  <input type="submit" value="Login" />
                </form>
                <Link className="farmer-already" to="/sign/farmer">
                    Already have an account? <span>Sign up</span>
                </Link>
            </div>
            <div className="farmer-login-right">
              <h1>Croply</h1>
              <img src={assets.man} alt="" />
            </div>
        </div>
    </>
  )
}

export default FarmerLogin