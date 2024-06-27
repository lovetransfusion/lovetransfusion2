'use client'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import axios from 'axios'

const SuccessPageOfCustomFlow = () => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState('')

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const intentId = urlParams.get('payment_intent')

    const initiateGet = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/checkout-custom-flow/api`,
          {
            intentId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        if (response) {
          setStatus(response.data.status)
          setCustomerEmail(response.data.customer_email)
        }
      } catch (error) {
        console.error('Error during checkout:', error.message)
      }
    }
    initiateGet()
  }, [])

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'succeeded') {
    return (
      <div className={'flex justify-center'}>
        <div className={'flex max-w-[920px] text-center'}>
          <p>
            We appreciate your business! A receipt email will be sent to{' '}
            {customerEmail}. If you have any questions, please email{' '}
            <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </div>
      </div>
    )
  }

  return null
}

export default SuccessPageOfCustomFlow
