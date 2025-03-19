import "./ProfileModal.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ProfileModal = ({isOpen, onClose}) => {
    if(!isOpen) return null;
  return (
    <>
        <div className="profile-modal-overlay" onClick={onClose}>
            <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
                <Link to="/profile" className="profile-modal-link">
                    Profile
                </Link>
                <Link to="/settings" className="profile-modal-link">
                    Settings
                </Link>
                <Link to="/profile" className="profile-modal-link">
                    Help & Support
                </Link>
            </div>
        </div>
    </>
  )
}

ProfileModal.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    onClose : PropTypes.bool.isRequired,
};

export default ProfileModal