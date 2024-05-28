'use client'
import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import { openSans } from '@/utilities/fonts/fonts'
import { useStore } from 'zustand'
import utilityStore2 from '@/utilities/store/utilityStore'
import utilityStore from '@/utilities/store/store'
import SummaryAdCampaign from './SummaryAdCampaign'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_spinner from '@/app/components/icons/Icon_spinner'

export default function CheckoutForm({ variation }) {
  const stripe = useStripe()
  const elements = useElements()

  // const [errorMessage, setErrorMessage] = useState()
  const [isLoading, setsLoading] = useState(false)
  const { settoast } = useStore(utilityStore2)

  const {
    adCampaign: {
      donationAmount,
      donorFirstName,
      donorLastName,
      donorEmailAddress,
      donee,
    },
  } = useStore(utilityStore)

  const handleError = (error) => {
    setsLoading(false)
    settoast({
      description: error.message,
      status: 'error',
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe) {
      return
    }

    setsLoading(true)

    if (!donorFirstName || !donorEmailAddress) {
      setsLoading(false)
      settoast({
        description: 'Incomplete user information',
        status: 'error',
      })
      return
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit()
    if (submitError) {
      handleError(submitError)
      return
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/create`,
      {
        data: {
          donationAmount,
          donorFirstName,
          donorLastName,
          donorEmailAddress,
          description: `Ad Campaign - $${parseFloat(
            donationAmount
          )} donation for ${donee} from ${donorFirstName} ${donorLastName}`,
        },
      }
    )

    const { clientSecret } = await response.data

    const targetPathURL = window.location.pathname
    const optionalParams = `?variation=${variation}`

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${targetPathURL}${optionalParams}`,
      },
    })

    if (error) {
      handleError(error)
    } else {
      // redirect to "return url"
    }
  }

  return (
    <div className="mt-6">
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className={'flex items-center gap-2 mb-2 text-[#8d8e8e]'}>
          <Icon_padlock className="size-4" />
          <p className={'text-sm'}>This is a secure SSL encrypted payment.</p>
        </div>
        <div className={'flex flex-col gap-4'}>
          <PaymentElement id="payment-element" />
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
        </div>
      </form>
    </div>
  )
}
