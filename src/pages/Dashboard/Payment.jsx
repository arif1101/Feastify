import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../useComponents/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div className='py-24 w-full'>
            <SectionTitle title={"payment"} subTitle={'---pay for eat---'}></SectionTitle>
            <div className='w-96 mx-auto bg-orange-200 py-3 px-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;