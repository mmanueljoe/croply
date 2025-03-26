import React from 'react';
import "./FarmerResources.css";
import assets from '../../assets';
import { Link } from 'react-router-dom';
import farmerResources from '../../data/farmerResources';

const FarmerResources = () => {
  return (
    <>
        <div className='fa-resources-container'>
            <div className='fa-resources-header'>
                <h2>Crop Advisories</h2>
                <div className='fa-resources-header-ai'>
                    <Link>
                        <img src={assets.ai_logo} alt="" />
                        <p>Croply Ai</p>
                    </Link>
                </div>
            </div>
            <div className='fa-resources-items'>
                {farmerResources.map((resource) => (
                    <Link key={resource.id} to={`/farmer/resources/${resource.id}`}>
                        <div className='fa-resources-item'>
                            <img src={resource.img} alt={resource.title} />
                            <p>{resource.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
  );
}

export default FarmerResources;