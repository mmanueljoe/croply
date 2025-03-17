import assets from "../../assets";
import "./WhyChoose.css";
import { useNavigate } from "react-router-dom";

const WhyChoose = () => {
    const navigateFamSign = useNavigate();
  return (
    <>
        <div className="why-choose-container" id="farmer">
            <h1>Why Choose Croply?</h1>
            <div className="why-choose-content">
                <h2>Farmers</h2>
                <p>Grow Smarter, Sell Better with Croply</p>
            </div>
            <div className="why-choose-img">
                <img src={assets.whyImg} alt="" />
            </div>
            <div className="why-choose-features">
                <div className="why-choose-feature"
                data-description="Stay ahead with up-to-date market 
prices, buyer and seller details, and 
trends that matter. Make informed 
decisions and maximize your profits.">
                    <p>Real-Time Market Information</p>
                </div>
                <div className="why-choose-feature"
                data-description="Access weather forecasts, crop 
advisories, and the latest research 
to optimize your farming practices. 
Knowledge is power, and we’re here 
to keep you informed.">
                    <p>Agricultural Insights At Your Fingertips</p>
                </div>
                <div className="why-choose-feature"
                data-description="Join a network of farmers and 
buyers who share your passion 
for agriculture. Exchange ideas, 
share experiences, and learn 
from each other in our vibrant 
community forum.">
                    <p>A Thriving Community</p>
                </div>
                <div className="why-choose-feature"
                data-description="Find everything you need in one 
place—agricultural inputs, 
equipment, financial services, and 
more. Croply connects you to the 
resources that drive success.">
                    <p>Resource Directory</p>
                </div>
            </div>
            <button className="join-farmer-btn" onClick={() => {navigateFamSign('sign/farmer')}}>
                Join as a Farmer
            </button>
        </div>
    </>
  )
}

export default WhyChoose;