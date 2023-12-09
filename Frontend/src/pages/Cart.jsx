import React from 'react'
import stripeLogo from '../assets/images/stripeLogo.png'
import axios from 'axios';

import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";


export default function Cart() {

    const stripe = useStripe();
    const elements = useElements();
    const amount = 200;

    const placeOrder = async (event) => {
       
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const { data } = await axios.post(
                "http://localhost:8080/process_payment",
                { amount: amount } 
            );

            const client_secret = data.client_secret;

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: 'Stripe Implementation Mern',
                    },
                },
            });

            if (result.error) {
                console.error(result.error.message);
                alert(result.error.message);
                return;
            } else {
                const paymentMethod = result.paymentIntent.payment_method;
                console.log("Payment Successful! " + " amount: " + amount)
            }
        } catch (error) {
            console.error(error);
            alert("Payment Unsuccessful!");
            return;
        }
    };


    const cardElementStyle = {
        base: {
            fontSize: '18px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
            // border: '1px solid black', 
        },
        invalid: {
            color: 'red',
        },
    };

    const cardElementOptions = {
        style: cardElementStyle,
    };

    return (
        <>
            <div className='text-center mt-10 text-2xl font-semibold underline'>Stripe Card Payment</div>
            <div className='flex justify-center items-center mt-20 flex-col'>

                <div className='w-[500px]'>
                    <img src={stripeLogo} className='w-full h-20 object-contain mb-10' alt='' />

                    <div style={{ marginBottom: '16px', border: '2px solid #00308F', padding: 8, borderRadius: 5 }}>
                        <CardNumberElement options={cardElementOptions} />
                    </div>


                    <div style={{ marginBottom: '16px', border: '2px solid #00308F', padding: 8, borderRadius: 5 }}>
                        <CardExpiryElement options={cardElementOptions} />
                    </div>

                    <div style={{ marginBottom: '16px', border: '2px solid #00308F', padding: 8, borderRadius: 5 }}>
                        <CardCvcElement options={cardElementOptions} />
                    </div>
                </div>
                <div className='mt-10 w-[500px] mx-auto bottom-10 flex flex-col justify-center items-center '>
                    <button className="py-2 w-full mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mb-3" onClick={(event) => placeOrder(event)}>Pay (200-Rs)</button>
                </div>

            </div>
        </>
    )
}
