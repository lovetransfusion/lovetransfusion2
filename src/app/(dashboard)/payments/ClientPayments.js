'use client'
/* eslint-disable react-hooks/exhaustive-deps*/
import { createClient } from '@/config/supabase/supabaseClient'
import utilityStore from '@/utilities/store/utilityStore'
import { useEffect, useState } from 'react'
import { useStore } from 'zustand'

const ClientPayments = () => {
  const [payments, setpayments] = useState(null)
  const { user } = useStore(utilityStore)

  const supabase = createClient()

  const getUser = async () => {
    const { data: payments } = await supabase
      .from('donations')
      .select('*')
      .eq('donor_email', user?.email)
    if (payments) {
      setpayments(payments)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user])

  console.log({ payments })
  return (
    <div className={'w-full'}>
      <h2 className={'text-xl font-semibold text-primary'}>Payments</h2>
      <div className={'overflow-x-scroll md:overflow-auto'}>
        {payments && (
          <table className="table-auto w-full my-6">
            <thead>
              <tr className="text-left bg-primary-300 rounded-full border-b-2 border-primary-400 text-white">
                <th className="px-3 py-3">Recipient</th>
                <th className="px-3 py-3">Amount</th>
                <th className="px-3 py-3">Date</th>
                <th className="px-3 py-3">Payment ID</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, index) => {
                const {
                  amount,
                  first_name,
                  last_name,
                  payment_intent_id,
                  created_at,
                } = payment
                return (
                  <tr key={index} className="even:bg-primary-50">
                    <td className={'px-3 py-3'}>
                      {first_name} {last_name}
                    </td>
                    <td className={'px-3 py-3'}>${amount}</td>
                    <td className={'px-3 py-3'}>
                      {new Date(created_at).toLocaleDateString()}
                    </td>
                    <td className={'px-3 py-3'}>{payment_intent_id}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
        {!payments && (
          <div className="my-6">
            <div className={'w-full h-12 bg-gray-200 animate-pulse'}></div>
            <div className={'w-full h-12'}></div>
            <div className={'w-full h-12 bg-gray-200 animate-pulse'}></div>
            <div className={'w-full h-12'}></div>
            <div className={'w-full h-12 bg-gray-200 animate-pulse'}></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClientPayments
