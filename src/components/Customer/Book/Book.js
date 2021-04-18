import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext, UserContext } from '../../../App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import './Book.css';

const stripePromise = loadStripe('pk_test_51Ie7pOLTEVBMGlqU8z10mCS2xe3sSQPlJKmPsR28lDb23O2g6MZsX7msJYFeqnuCpEk8ZZfV74cqWC5x6e9xq7Dv00BMSCzHaV');

const Book = () => {
    const [success, setSuccess] = useState('');
    const [service, setService] = useContext(ServiceContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email, name} = loggedInUser;
    const {id} = service;
    const [services, setServices] = useState({});
    const {title, price} = services;

    
    if (name && email && title) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('title').value = title;
    }

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [id])

    const handleSubmit = (event) => {   
        const status = 'done';
        const payWith = 'Credit Card';
        const updateBooking = { 
            payWith: payWith,
            status: status
        };

        fetch(`https://morning-island-82484.herokuapp.com/bookingUpdate/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updateBooking)
        })
        .then(result => setSuccess("Booking Update Successfully!"))
        event.preventDefault(); 
    }
    
    return (
        <div className="p-4 w-50 book-details">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" className="form-control mb-3"/>
                <input type="email" name="email" id="email" className="form-control mb-3"/>
                <input type="text" name="title" id="title" className="form-control mb-3"/> 
                <p>Payment Method:</p>
                <Elements stripe={stripePromise}>
                    <CardElement 
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                    color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </Elements>
                <span className="me-4 pe-4">Your Service charged With ${price}</span>
                <input type="submit" className="btn btnPay mt-3" value="Pay" />
            </form>
            {success &&
                <p className="text-center text-success pt-5">{success}</p>
            }
        </div>
    );
};

export default Book;