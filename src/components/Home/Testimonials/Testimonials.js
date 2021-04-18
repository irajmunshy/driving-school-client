import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://morning-island-82484.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className="testimonials-area">
            <div className="container text-center py-5">
                <h3 className="py-3">Testimonials</h3>

                <div className="row">
                    {
                        reviews.map(review => <Testimonial review={review}></Testimonial>)
                    }
                </div>                 
            </div>
        </div>
    );
};

export default Testimonials;