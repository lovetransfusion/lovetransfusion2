import React, { Suspense } from 'react'
import ClientPayments from './ClientPayments'
import { cookies } from 'next/headers'

const PaymentsPage = () => {
  const userCookie = cookies().get('current-user')?.value
  const currentUser = userCookie && JSON.parse(userCookie)
  return (
    <>
      <Suspense>
        <ClientPayments currentUser={currentUser} />
      </Suspense>
    </>
  )
}

export default PaymentsPage
