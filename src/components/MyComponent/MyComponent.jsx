import React from 'react';
import { useNavigate } from 'react-router-dom';


function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Learn-More');
  };

  return <button onClick={handleClick}>Learn More</button>;
}

export default MyComponent;

