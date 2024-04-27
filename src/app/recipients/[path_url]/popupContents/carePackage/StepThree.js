import React, { Suspense } from 'react'
import BottomSection from './BottomSection'
import TopSection from './TopSection'
import UserForm from './UserForm'
import dynamic from 'next/dynamic'
import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'

const PaymentForm = dynamic(() => import('./PaymentForm'), {
  loading: () => <p></p>,
})

const StepThree = () => {
  const { carePackage } = useStore(utilityStore)
  return (
    <div className="w-full">
      <TopSection parameters={{ text: 'Add Your Information', number: 2 }} />
      <div className={'flex flex-col px-8'}>
        <p className={'text-[22px] mt-9 font-mediumCond text-center'}>
          {`Who's giving today?`}
        </p>
        <p className={'text-sm text-center italic text-[#767676]'}>
          We’ll never share this information with anyone.
        </p>

        <UserForm />
        <Suspense fallback={<h2>Loading Payment...</h2>}>
          {carePackage.donationAmount && <PaymentForm />}
        </Suspense>
      </div>
      <BottomSection parameters={{}} />
    </div>
  )
}

export default StepThree
