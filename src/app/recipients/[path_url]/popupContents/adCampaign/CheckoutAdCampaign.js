'use client'
import React, { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useStore } from 'zustand'
import axios from 'axios'
import utilityStore from '@/utilities/store/store'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import { openSans } from '@/utilities/fonts/fonts'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import SummaryAdCampaign from './SummaryAdCampaign'

const CheckoutAdCampaign = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    adCampaign: {
      pIntent,
      donationAmount,
      donorFirstName,
      donorLastName,
      donorEmailAddress,
      donee,
    },
    setpIntentAC,
  } = useStore(utilityStore)

  useEffect(() => {
    if (!stripe && !elements) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (donorFirstName && donorLastName && donorEmailAddress) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/update/update-cp-intent`,
          {
            data: {
              pIntentId: pIntent?.pIntentId,
              donationAmount,
              donorFirstName,
              donorLastName,
              donorEmailAddress,
              description: `Ad Campaign - $${parseFloat(
                donationAmount
              )} donation for ${donee} from ${donorFirstName} ${donorLastName}`,
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        if (response) {
          setpIntentAC(response.data)
        }
      } catch (error) {
        console.error('Error during checkout:', error.message)
        return
      }
    } else {
      runToast('Incomplete user information')
      return
    }

    if (!stripe || !elements) {
      return
    }

    const targetPathURL = window.location.pathname
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${targetPathURL}`,
      },
    })

    setIsLoading(false)
  }
  const paymentElementOptions = {
    layout: {
      type: 'tabs', // accordion
      defaultCollapsed: false,
      //   radios: false,                 // Only in "accordion"
      //   spaceAccordionItems: true      // Optional in "accordion"
    },
  }
  return (
    <div className="mt-6">
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className={'flex items-center gap-2 mb-2 text-[#8d8e8e]'}>
          <Icon_padlock className="size-4" />
          <p className={'text-sm'}>This is a secure SSL encrypted payment.</p>
        </div>
        <div className={'flex flex-col gap-4'}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <SummaryAdCampaign />
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="leading-[22px] flex gap-2 items-center justify-center w-fit h-fit text-sm rounded-[5px] font-semibold text-white px-[17px] py-2 bg-primary hover:bg-primary-600 transition-all duration-300 ${openSans.className} leading-[22px] font-semibold py-3 w-full"
          >
            <div className={'flex relative mx-auto w-fit items-center gap-2'}>
              <p className={`${openSans.className} relative`}>
                Submit Donation{' '}
                {isLoading && (
                  <Icon_spinner className="animate-spin absolute right-[-28px] top-0 bottom-0 my-auto size-5" />
                )}
              </p>
            </div>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </div>
      </form>
    </div>
  )
}

export default CheckoutAdCampaign
