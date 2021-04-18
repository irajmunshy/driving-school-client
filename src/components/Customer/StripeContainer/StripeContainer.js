import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import PaymentFrom from '../PaymentFrom/PaymentFrom';


const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentFrom />
        </Elements>
    );
};

export default StripeContainer;