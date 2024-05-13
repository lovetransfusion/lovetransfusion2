'use client'
import React, { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import { openSans } from '@/utilities/fonts/fonts'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import { useStore } from 'zustand'
import utilityStore2 from '@/utilities/store/utilityStore'

const Checkout = ({
  parameters: {
    donationAmount,
    firstName,
    lastName,
    email,
    pIntent,
    setpIntent,
  },
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const { settoast } = useStore(utilityStore2)

  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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
    console.log({ firstName, lastName, email })
    if (firstName && lastName && email) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/payment-intents/update/update-cp-intent`,
          {
            data: {
              pIntentId: pIntent?.pIntentId,
              donationAmount,
              donorFirstName: firstName,
              donorLastName: lastName,
              donorEmailAddress: email,
              description: `$${parseFloat(
                donationAmount
              )} Donation from ${firstName} ${lastName}`,
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
        return
      }
    } else {
      console.log('error')
      setIsLoading(false)
      settoast({
        description: 'Incomplete user information',
        status: 'error',
      })
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
            className="mt-6 leading-[22px] flex gap-2 items-center justify-center w-fit h-fit text-[22px] rounded-[5px] font-semibold text-white px-[17px] pt-[17px] pb-[18px] bg-primary hover:bg-primary-600 transition-all duration-300 ${openSans.className} font-semibold py-3 w-full"
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
          {message && <div id="payment-message">{message}</div>}
        </div>
      </form>
    </div>
  )
}

export default Checkout
