import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/outline';
import "./SignupModal.css";
import PropTypes from 'prop-types';

const SignupModal = ({isOpen, onClose}) => {
  const navigate = useNavigate();

  useState(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown',handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <>
    <div className="modal-overlay"
    onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="button-container">
          <button className="role-button farmer" 
          onClick={() => {navigate('/sign/farmer');
            onClose();
          }}
          >
            Sign up as farmer
          </button>

          <button className="role-button buyer"
          onClick={() => {
            navigate('sign/buyer');
            onClose();
          }}>
            Sign up as buyer
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

SignupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;