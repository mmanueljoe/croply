
import './SignOutModalBuyer.css';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'; // X Icon
// import { MdWarning } from 'react-icons/md'; // Red Warning Icon
import assets from '../../assets';

const SignOutModalBuyer = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    return (
        <>
           <div className="modal-overlay">
      <div className="modal-container">
        {/* Close Icon (X) */}
        <FaTimes className="close-icon" onClick={onClose} />

        {/* Warning Icon */}
        {/* <MdWarning  /> */}
        <img src={assets.warning_icon} alt="" className="warning-icon"/>

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
};

SignOutModalBuyer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,

};

export default SignOutModalBuyer