import assets from "../../assets";
import "./WhyChoose.css";


const WhyChoose = () => {
  return (
    <>
        <div className="why-choose-container">
            <h1>Why Choose Croply?</h1>
            <div className="why-choose-content">
                <h2>Farmers</h2>
                <p>Grow Smarter, Sell Better with Croply</p>
            </div>
            <div className="why-choose-img">
                <img src={assets.whyImg} alt="" />
            </div>
            <div className="why-choose-features">
                <div className="why-choose-feature">
                    <p>Real-Time Market Information</p>
                </div>
                <div className="why-choose-feature">
                    <p>Agricultural Insights
                    At Your Fingertips</p>
                </div>
                <div className="why-choose-feature">
                    <p>A Thriving
                    Community</p>
                </div>
                <div className="why-choose-feature">
                    <p>Resource
                    Directory</p>
                </div>
            </div>
            <button className="join-farmer-btn">
                Join as a Farmer
            </button>
        </div>
    </>
  )
}

export default WhyChoose