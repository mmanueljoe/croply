import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { farmerListings } from "../../data/farmerListings";
import "./FarmerListing.css";
import { Link } from "react-router-dom";

const FarmerListing = () => {
    return (
        <>
            <div className="fa-listings-container">
                <div className="fa-listings-header">
                    <button className="fa-active-listing-btn">
                        Active Listings
                    </button>
                    <button className="fa-active-listing-add">
                        <IoIosAddCircleOutline className="fa-add-icon" />
                    </button>
                </div>



                {/* farmer listing */}
                <div className="fa-listings-items-container">
                    {farmerListings.map((item) => (
                        <div key={item.id} className="fa-listings-grid">
                        <div className="fa-edit-delete-icon">
                            <Link className="fa-edit">
                                <AiFillEdit />
                            </Link>
    
                           <Link className="fa-delete">
                                <RiDeleteBin6Line />
                           </Link>
                            
                        </div>
                        <div className="fa-listings-items">
                                <div className="fa-listings-item">
                                    <div className="fa-listings-item-img">
                                        <img src={item.image} alt={item.itemName} />
                                    </div>
                                    <div className="fa-listings-item-details">
                                        <div className="fa-listings-item-name">
                                            <h3>{item.itemName}</h3>
                                        </div>
                                        <div className="fa-listings-qua-price">
                                            <div className="fa-listings-qua">
                                                <p>Quantity</p>
                                                <h3>{item.quantity}</h3>
                                            </div>
                                            <div className="fa-listings-price">
                                                <p>Price</p>
                                                <h3>GHS {Number(item.price).toFixed(2)}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default FarmerListing