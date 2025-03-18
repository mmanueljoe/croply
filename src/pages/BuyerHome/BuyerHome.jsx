import  "./BuyerHome.css";
import {buyerStat} from "../../data/buyerStats";
import {buyerListings} from "../../data/buyerListings";
import { MdLocationPin } from "react-icons/md";
import {Link} from "react-router-dom";
const BuyerHome = () => {
  return (
    <>
        <div className="bu-home-container">
            <div className="bu-dashboard-header">
                <h1>Hello, Amoabi</h1>
                <p>Discover fresh produce from trusted farmers today!</p>
            </div>
                   {/* buyer stats grid */}
        <div className="bu-stat-container">
            <div className="bu-stat-grid">
                <div className="bu-stat-box">
                    <div className="bu-stat-title">Active Order</div>
                    <div className="bu-stat-value">{buyerStat.activeOrders}</div>
                </div>
                <div className="bu-stat-box">
                    <div className="bu-stat-title">Total Spending</div>
                    <div className="bu-stat-value">{buyerStat.totalSpending}</div>
                </div>
                <div className="bu-stat-box">
                    <div className="bu-stat-title">Farmers Connected</div>
                    <div className="bu-stat-value">{buyerStat.connectedFarmers}</div>
                </div>
                <div className="bu-stat-box">
                    <div className="bu-stat-title">Market Trends</div>
                    <div className="bu-stat-value">{buyerStat.marketTrends}</div>
                </div>
            </div>
        </div>

        {/* available listing section */}
        <div className="bu-listings-container">
            <div className="bu-listings-header">
                <h2>Available Listings</h2>
                <Link to="/all-listings" className="bu-see-all">
                    <p>See All</p>
                </Link>
            </div>
            <div className="bu-listings-grid">
                {buyerListings.slice(0,2).map((listing) => 
                    (
                        <div key={listing.id} className="bu-listings-card">
                        <div className="bu-listings-img-container">
                            <img 
                            src={listing.listingImg} 
                            alt={listing.name} />
                        </div>
                        <div className="bu-listings-description">
                            <div className="bu-listings-name">
                                <h3>{listing.name}</h3>
                            </div>
                            <div className="bu-listings-details">
                                <div className="bu-listings-quantity">
                                    <p>Quantity</p>
                                    <h3>{listing.quantity}</h3>
                                </div>
                                <div className="bu-listings-price">
                                    <p>Price</p>
                                    <h3>GHS {Number(listing.price).toFixed(2)}</h3>
                                </div>
                            </div>
                            <div className="bu-location-name">
                                <div className="bu-name">
                                    <img src={listing.farmerImage} alt="Farmer Image" />
                                    <span>{listing.farmer}</span>
                                </div>
                                <div className="bu-location">
                                    <MdLocationPin />
                                    <span>{listing.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    )     
               )}
            </div>
        </div>

        {/* transactions section */}
      <div className="bu-listing-transaction">
        <h3>Current Transactions</h3>
        <p>No current transactions</p>
      </div>
        </div>
    </>
  )
}

export default BuyerHome