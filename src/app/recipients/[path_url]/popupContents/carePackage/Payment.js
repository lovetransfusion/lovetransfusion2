import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Payment = ({ variation, id }) => {
  const appearance = {
    theme: 'stripe',
    variables: {
      borderRadius: '6px',
      colorPrimary: '#2F8EDD',
    },
    rules: {
      '.Label': {
        fontSize: 0,
      },
      '.Tab': {
        borderColor: '#8c8c8c',
      },
      '.Input': {
        borderColor: '#8c8c8c',
        fontSize: '17px',
        color: '#222',
        paddingTop: '14px',
        paddingBottom: '14px',
      },
      '.Input::placeholder': {
        color: '#8A96A9',
      },
      '.Input:focus-visible': {
        borderColor: '#3182ce',
        boxShadow: '0 0 0 1px #3182ce',
      },
    },
  }

  const options = {
    mode: 'payment',
    amount: 69,
    currency: 'usd',
    appearance,
  }

  console.log({ stripePromise })
  return (
    <div className="mb-3 min-h-[355px]">
      <Elements stripe={stripePromise} options={options} className="w-full">
        <CheckoutForm variation={variation} />
      </Elements>
    </div>
  )
}

export default Payment
