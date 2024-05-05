import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import TopSectionAdCampaign from './TopSectionAdCampaign'
import BottomSectionAdCampaign from './BottomSectionAdCampaign'
import UserFormAdCampaign from './UserFormAdCampaign'
import LoadingComponent from '@/app/components/LoadingComponent'

const PaymentForm = dynamic(() => import('./PaymentForm'), {
  loading: () => <LoadingComponent />,
})

const StepThree = () => {
  const { adCampaign } = useStore(utilityStore)
  return (
    <div className="w-full">
      <TopSectionAdCampaign
        parameters={{ text: 'Add Your Information', number: 2 }}
      />
      <div className={'flex flex-col px-4 md:px-8'}>
        <p className={'text-[22px] mt-9 font-mediumCond text-center'}>
          {`Who's giving today?`}
        </p>
        <p className={'text-sm text-center italic text-[#767676]'}>
          We’ll never share this information with anyone.
        </p>

        <UserFormAdCampaign />
        <Suspense fallback={<h2>Loading Payment...</h2>}>
          {adCampaign.donationAmount && <PaymentForm />}
        </Suspense>
      </div>
      <BottomSectionAdCampaign parameters={{}} />
    </div>
  )
}

export default StepThree
