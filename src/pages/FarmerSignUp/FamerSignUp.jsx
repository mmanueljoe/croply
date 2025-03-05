import "./FarmerSignUp.css";
import assets from "../../assets";
import { Link } from "react-router-dom";

const FamerSignUp = () => {
  return (
    <>
        <div className="farmer-signup-container">
            <div className="fam-left-col">
                <img src={assets.man} alt="" />
            </div>

            <div className="fam-right-col">
                <div>
                    <h1>Croply</h1>
                    <p>Create Account</p>
                    <div>
                        <button>
                            Sign up with Google
                        </button>
                        <button>
                            Sign up with Facebook
                        </button>
                    </div>
                </div>
                <p>-OR-</p>
                <form action="">
                    <input type="text" placeholder="Full Name"/>
                    <input type="tel" placeholder="Phone Number"/>
                    <input type="text" placeholder="Password"/>
                    <input type="submit" />
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