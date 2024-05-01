'use client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect } from 'react'
import CheckoutCarePackage from './CheckoutCarePackage'
import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import axios from 'axios'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const PaymentForm = () => {
  const {
    carePackage: { pIntent, donationAmount, donee },
    setpIntent,
  } = useStore(utilityStore)

  useEffect(() => {
    if (!pIntent) {
      const createIntent = async () => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/create/singleItemApi`,
            {
              data: {
                donationAmount,
                description: `Care Package - $${parseFloat(
                  donationAmount
                )} donation intent for ${donee}`,
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          if (response) {
            setpIntent(response.data)
          }
        } catch (error) {
          console.error('Error during checkout:', error.message)
        }
      }
      createIntent()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    clientSecret: pIntent?.clientSecret,
    appearance,
  }
  return (
    <div className="mb-3 min-h-[355px]">
      {pIntent?.clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutCarePackage />
        </Elements>
      )}
      {!pIntent?.clientSecret && (
        <div className={'flex justify-center gap-2 items-center min-h-[307px]'}>
          <Icon_spinner className="animate-spin size-12 text-primary" />
          <p className='text-3xl font-bold'>Loading...</p>
        </div>
      )}
    </div>
  )
}

export default PaymentForm
