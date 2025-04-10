import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useCart from '../../useComponents/useCart';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import AuthContext from '../../context/AuthContext';

const CheckoutForm = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [transactionId, setTransactionId] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState()
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total+item.price, 0)

    useEffect(()=> {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,totalPrice])
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            setError(error.message)
        }
        else{
            console.log('payment method : ', paymentMethod)
            setError('')
        }

        // confirm payment 
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
              },
            },
          );
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent : ', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
            <button className='bg-blue-500 py-2 px-4 rounded-xl mt-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-500'>{error}</p>
            {
                transactionId && <p className='text-green-600'>transaction ID : {transactionId}</p>
            }
            </form>
        </div>
    );
};

export default CheckoutForm;