import "./AsBuyer.css";
import assets from "../../assets";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const AsBuyer = () => {
    const navigateSign = useNavigate();
    return (
        <>
            <div className="as-buyer-container">
                <div className="buyer-content">
                    <h2>Buyer</h2>
                    <p>Source Fresh, Quality Crops with Ease</p>
                </div>
                <div className="buyer-img">
                    <img src={assets.veg} alt="" />
                </div>
                <div className="buyer-features">
                    <div className="buyer-feature"
                        data-description="Source fresh produce directly 
                        from trusted farmers, ensuring 
                        quality and transparency.">
                        <p>Direct Farmer
                            Connections</p>
                    </div>
                    <div className="buyer-feature"
                        data-description="Stay updated with the latest 
                        prices and availability to make 
                        informed buying decisions.">
                        <p>Real-Time Market
                            Informations</p>
                    </div>
                    <div className="buyer-feature"
                        data-description="Access a diverse range of crops 
                        from farmers in Ho and beyond.">
                        <p>Wide Variety
                            Of Crops</p>
                    </div>
                    <div className="buyer-feature"
                        data-description="Negotiate, purchase, and manage 
                        orders seamlessly through our 
                        platform.">
                        <p>Streamlined
                            Transactions</p>
                    </div>
                </div>
                <button className="buyer-btn" onClick={() => {navigateSign('sign/buyer')}}>
                    Join as a Buyer
                </button>
            </div>
        </>
    )
}

export default AsBuyer;