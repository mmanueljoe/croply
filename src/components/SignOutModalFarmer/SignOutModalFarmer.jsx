

import PropTypes from 'prop-types';

const SignOutModalFarmer = ({isOpen, onClose, onConfirm}) => {
    if (!isOpen) return null
  return (
    <>
       <div className="modal-overlay">
                <div className="modal-container">
                    {/* Close Button */}
                    <div className="close-icon" onClick={onClose}></div>

                    {/* Warning Icon */}
                    <div className="warning-icon"></div>

                    {/* Modal Title */}
                    <h1 className="modal-title">Sign Out</h1>

                    {/* Confirmation Message */}
                    <p className="modal-text">Are you sure you want to sign out from your account?</p>

                    {/* Buttons */}
                    <div className="modal-buttons">
                        <button className="btn yes-btn" onClick={onConfirm}>Yes</button>
                        <button className="btn cancel-btn" onClick={onClose}>Cancel</button>
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

