'use client'
import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import Icon_padlock from '../components/icons/Icon_padlock'
import Icon_spinner from '../components/icons/Icon_spinner'
import { openSans } from '@/utilities/fonts/fonts'
import { useStore } from 'zustand'
import utilityStore2 from '@/utilities/store/utilityStore'

export default function CheckoutForm({
  parameters: { donationAmount, firstName, lastName, email },
}) {
  const stripe = useStripe()
  const elements = useElements()

  // const [errorMessage, setErrorMessage] = useState()
  const [isLoading, setsLoading] = useState(false)
  const { settoast } = useStore(utilityStore2)

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

    if (!firstName || !email) {
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
          donorFirstName: firstName,
          donorLastName: lastName,
          donorEmailAddress: email,
          description: `$${parseFloat(
            donationAmount
          )} Donation from ${firstName} ${lastName}`,
          source: 'Donation Page'
        },
      }
    )

    const { clientSecret } = await response.data

    const targetPathURL = window.location.pathname

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${targetPathURL}`,
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
          <p className={'px-8 pt-[18px] pb-[16px] text-center'}>
            {"Here's what you're about to donate:"}
          </p>
          <div
            className={
              'px-4 md:px-8 pt-5 pb-[16px] bg-[#F9F9F9] divide-[#DDDDDD] divide-y-[1px]'
            }
          >
            <p className={'text-[20px] leading-[22px] py-5'}>
              Donation Summary
            </p>
            <div className={'flex justify-between leading-[22px] py-5'}>
              <p className={''}>Payment Amount</p>
              <p className={''}>${donationAmount}</p>
            </div>
            <div className={'flex justify-between leading-[22px] py-5'}>
              <p className={''}>Giving Frequency</p>
              <p className={''}>One time</p>
            </div>
            <div
              className={'flex justify-between leading-[22px] py-5 text-[18px]'}
            >
              <p className={'font-bold'}>Donation Total</p>
              <p className={'font-bold'}>${donationAmount}</p>
            </div>
          </div>
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className={`mt-6 leading-[22px] flex gap-2 items-center justify-center w-fit h-fit text-[22px] rounded-[5px] font-semibold text-white px-[17px] pt-[17px] pb-[18px] bg-primary hover:bg-primary-600 transition-all duration-300 ${openSans.className} font-semibold py-3 w-full`}
          >
            <div className={'flex relative mx-auto w-fit items-center gap-2'}>
              <p className={`${openSans.className} relative`}>
                Donate Now{' '}
                {isLoading && (
                  <Icon_spinner className="animate-spin absolute right-[-28px] top-0 bottom-0 my-auto size-5" />
                )}
              </p>
            </div>
          </button>
          <div className={'px-8'}>
            <div className={'flex gap-1 items-center pt-4 justify-center'}>
              <Icon_padlock className={'text-[#77D006] size-[14px]'} />
              <p className={'text-[13px] text-center'}>100% Secure Donation</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
