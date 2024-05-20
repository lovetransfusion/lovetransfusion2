import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import TopSectionCarePackage from './TopSectionCarePackage'
import BottomSectionCarePackage from './BottomSectionCarePackage'
import UserFormCarePackage from './UserFormCarePackage'
import LoadingComponent from '@/app/components/LoadingComponent'

const Payment = dynamic(() => import('./Payment'), {
  loading: () => <LoadingComponent />,
})

const StepThree = () => {
  const { carePackage } = useStore(utilityStore)
  return (
    <div className="w-full">
      <TopSectionCarePackage
        parameters={{ text: 'Add Your Information', number: 2 }}
      />
      <div className={'flex flex-col px-4 md:px-8'}>
        <p className={'text-[22px] mt-9 font-mediumCond text-center'}>
          {`Who's giving today?`}
        </p>
        <p className={'text-sm text-center italic text-[#767676]'}>
          We’ll never share this information with anyone.
        </p>

        <UserFormCarePackage />
        <Suspense fallback={<h2>Loading Payment...</h2>}>
          {carePackage.donationAmount && <Payment />}
        </Suspense>
      </div>
      <BottomSectionCarePackage parameters={{}} />
    </div>
  )
}

export default StepThree
