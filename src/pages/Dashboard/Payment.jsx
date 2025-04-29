import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../useComponents/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
    <div className="py-24 max-w-[1080px] w-full px-4 md:px-6 mx-auto">
    <SectionTitle title="Payment" subTitle="--- Pay for Eat ---" />

    <div className="w-full max-w-md mx-auto bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-100 p-8 rounded-2xl shadow-lg border border-orange-300">
        <div className="flex justify-center mb-4">
        <span className="text-4xl">💳</span>
        </div>
        <h3 className="text-xl font-semibold text-center mb-6 text-orange-900">Enter Your Card Details</h3>

        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
    </div>
    </div>
    );
};

export default Payment;