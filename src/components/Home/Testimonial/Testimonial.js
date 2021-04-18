import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css';

const Testimonial = ({review}) => {
    const {companyName, description, name, image} = review;

    return (
        <div className="col-md-4">
            <div className="review-detail mt-4">
                <div className="d-flex"> 
                    <img className="img-fluid" src={image} alt=""/>

                    <div>
                        <h5>{name}</h5>
                        <h6>{companyName}</h6>
                    </div>
                </div>

                <p className="pt-2">{description}</p>

                <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;