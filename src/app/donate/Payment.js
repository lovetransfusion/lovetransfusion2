import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE)

const Payment = ({
  parameters: { donationAmount, firstName, lastName, email },
}) => {
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
  return (
    <div className="mb-3 min-h-[355px]">
      <div>
        <Elements stripe={stripePromise} options={options} className="w-full">
          <CheckoutForm
            parameters={{
              donationAmount,
              firstName,
              lastName,
              email,
            }}
          />
        </Elements>
      </div>
    </div>
  )
}

export default Payment
