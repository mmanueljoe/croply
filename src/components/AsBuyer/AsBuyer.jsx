import "./AsBuyer.css";
import assets from "../../assets";

const AsBuyer = () => {
  return (
    <>
         <div className="as-buyer-container">
            <div className="buyer-content">
                <h2>Buyer</h2>
                <p>Source Fresh, Quality Crops with Ease</p>
            </div>
            <div className="buyer-img">
                <img src={assets.whyImg} alt="" />
            </div>
            <div className="buyer-features">
                <div className="buyer-feature">
                    <p>Direct Farmer
                    Connections</p>
                </div>
                <div className="buyer-feature">
                    <p>Real-Time Market
                    Informations</p>
                </div>
                <div className="buyer-feature">
                    <p>Wide Variety
                    Of Crops</p>
                </div>
                <div className="buyer-feature">
                    <p>Streamlined 
                    Transactions</p>
                </div>
            </div>
            <button className="buyer-btn">
                Join as a Buyer
            </button>
        </div>
    </>
  )
}

export default AsBuyer