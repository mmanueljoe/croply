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
                <img src={assets.veg} alt="" />
            </div>
            <div className="buyer-features">
                <div className="buyer-feature"
                data-description="">
                    <p>Direct Farmer
                    Connections</p>
                </div>
                <div className="buyer-feature"
                data-description="">
                    <p>Real-Time Market
                    Informations</p>
                </div>
                <div className="buyer-feature"
                data-description="">
                    <p>Wide Variety
                    Of Crops</p>
                </div>
                <div className="buyer-feature"
                data-description="">
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