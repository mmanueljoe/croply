import "./SignOutModalFarmer.css"

import PropTypes from 'prop-types';

const SignOutModalFarmer = ({isOpen, onClose, onConfirm}) => {
    if (!isOpen) return null
  return (
    <>
       <div className="fa-modal-overlay">
                <div className="fa-modal-container">
                    {/* Close Button */}
                    <div className="fa-close-icon" onClick={onClose}></div>

                    {/* Warning Icon */}
                    <div className="fa-warning-icon"></div>

                    {/* Modal Title */}
                    <h1 className="fa-modal-title">Sign Out</h1>

                    {/* Confirmation Message */}
                    <p className="fa-modal-text">Are you sure you want to sign out from your account?</p>

                    {/* Buttons */}
                    <div className="fa-modal-buttons">
                        <button className="btn fa-yes-btn" onClick={onConfirm}>Yes</button>
                        <button className="btn fa-cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
    </>
  );
}



SignOutModalFarmer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};



export default SignOutModalFarmer

