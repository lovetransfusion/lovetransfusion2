'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const TriggerPaymentReceipt = ({setpopup}) => {
  const payment_intent = useSearchParams().get('payment_intent')
  const redirect_status = useSearchParams().get('redirect_status')

  useEffect(() => {
    if (!!payment_intent && redirect_status === 'succeeded') {
      setpopup('donationReceipt')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div></div>
}

export default TriggerPaymentReceipt
