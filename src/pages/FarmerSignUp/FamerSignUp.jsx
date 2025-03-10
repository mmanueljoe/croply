import "./FarmerSignUp.css";
import assets from "../../assets";
import { Link } from "react-router-dom";

const FamerSignUp = () => {
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
                            Sign up with Google
                        </button>
                        <button>
                            Sign up with Facebook
                        </button>
                    </div>
                <p className="or">-OR-</p>
                <form action="" className="fam-form">
                    <input type="text" placeholder="Full Name"/>
                    <input type="tel" placeholder="Phone Number"/>
                    <input type="text" placeholder="Password"/>
                    <input type="submit" value='Create Account'/>
                </form>
                <Link>
                    Already have an account? <span>Login</span>
                </Link>

            </div>

        </div>
    </>
  )
}

export default FamerSignUp