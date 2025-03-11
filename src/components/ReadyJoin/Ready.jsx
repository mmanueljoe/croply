import "./Ready.css";
import { useNavigate } from "react-router-dom";

const Ready = () => {
    const navigateToFamSignup = useNavigate();
    const navigateToBuyerSignup = useNavigate();
    return (
        <>
            <div className="ready-container">
                <h1>Ready to Join the Croply Community?</h1>
                <div className="ready-content">
                    <p>Whether you’re a farmer or a buyer, Croply is here to make your journey easier,
                        smarter, and more profitable. Sign up today and experience the power
                        of smarter farming and better trading.
                    </p>
                    <p className="ready-content-p2">
                        Sign up now and experience the power of smarter farming and better trading.
                    </p>
                </div>
                
                <div className="ready-btns">
                    <button className="ready-farmer-btn" onClick={() => {navigateToFamSignup('/sign/farmer')}}>Join as a Farmer</button>
                    <button className="ready-buyer-btn" onClick={() => {navigateToBuyerSignup('/sign/buyer')}}>Join as a Buyer</button>
                </div>
            </div>

        </>
    )
}

export default Ready