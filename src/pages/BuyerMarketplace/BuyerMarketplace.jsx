import "./BuyerMarketplace.css";
import {Link} from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import buyerMarketplace from "../../data/buyerMarketplace";


const BuyerMarketplace = () => {
  return (
    <>
        <div className="bu-marketplace-container">
            <div className="bu-marketplace-header">
                <Link>
                    <MdKeyboardArrowLeft />
                    Marketplace
                </Link>
                <div className="bu-marketplace-search">
                    <IoSearch className="bu-marketplace-search-icon"/>
                    <input type="text" className="bu-marketplace-search-field"/>
                    <GiSettingsKnobs className="bu-marketplace-setting-icon"/>
                </div>
                <div>
                    <TiShoppingCart className="bu-marketplace-cart-icon"/>
                </div>
            </div>

            {/* marketplace items */}
            <div className="bu-marketplace-items">
                <div className="bu-marketplace-grid">
                    {buyerMarketplace.map((item) => 
                        (
                            <div key={item.id} className="bu-marketplace-item-card">
                                <div className="bu-marketplace-item-img">
                                    <img 
                                    src={item.image}
                                    alt={item.itemName} 
                                    />
                                </div>
                                <div className="bu-marketplace-item-desc">
                                    <div className="bu-name-price">
                                        <h3>{item.itemName}</h3>
                                        <p>GHS {Number(item.price).toFixed(2)}/Kg</p>
                                    </div>
                                    <div className="bu-marketplace-farmer-details">
                                        <div className="bu-marketplace-farmer-name">
                                            <img src={item.farmerImg} alt="Farmer Image" />
                                            <span>{item.farmerName}</span>
                                        </div>
                                        <div className="bu-marketplace-farmer-loc">
                                            <MdLocationPin className="bu-marketplace-loc-icon"/>
                                            <span>
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bu-marketplace-cta-btns">
                                        <button className="bu-marketplace-contact-btn">
                                            Contact Farmer
                                        </button>
                                        <button className="bu-marketplace-add-btn">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>

        </div>
    </>
  )
}

export default BuyerMarketplace