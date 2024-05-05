'use client'
import LoadingComponent from '@/app/components/LoadingComponent'
const Mission = dynamic(() => import('./Mission'), {
  loading: () => <LoadingComponent className={'min-h-[226px]'} />,
})
const Connections = dynamic(() => import('./Connections'), {
  loading: () => <LoadingComponent className={'min-h-[226px]'} />,
})
const CarePackages = dynamic(() => import('./CarePackages'), {
  loading: () => <LoadingComponent className={'min-h-[226px]'} />,
})
const FollowUp = dynamic(() => import('./FollowUp'), {
  loading: () => <LoadingComponent className={'min-h-[226px]'} />,
})
const TestimonialVideo = dynamic(() => import('./TestimonialVideo'), {
  loading: () => <LoadingComponent className={'min-h-[226px]'} />,
})
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Column1 = () => {
  const [active, setactive] = useState('Mission')
  return (
    <div className="text-[15px] lg:w-[560px] lg:min-w-[560px]">
      <div
        className={
          'grid grid-cols-2 md:grid-cols-5 bg-[#0CA2E0] text-white text-center'
        }
      >
        <p
          onClick={() => setactive('Mission')}
          className={`${
            active === 'Mission' && 'bg-[#30b0eb]'
          } hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5`}
        >
          Mission
        </p>
        <p
          onClick={() => setactive('Connections')}
          className={`${
            active === 'Connections' && 'bg-[#30b0eb]'
          } hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5`}
        >
          Connections
        </p>
        <p
          onClick={() => setactive('CarePackages')}
          className={`${
            active === 'CarePackages' && 'bg-[#30b0eb]'
          } hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5`}
        >
          Care Packages
        </p>
        <p
          onClick={() => setactive('FollowUp')}
          className={`${
            active === 'FollowUp' && 'bg-[#30b0eb]'
          } hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5`}
        >
          Follow Up
        </p>
        <p
          onClick={() => setactive('TestimonialVideo')}
          className={`${
            active === 'TestimonialVideo' && 'bg-[#30b0eb]'
          } hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5`}
        >
          Testimonials
        </p>
      </div>
      <div className={'bg-[#F6F6F6] py-5 pl-[25px] pr-5 text-[#354959]'}>
        {active === 'Mission' && <Mission />}
        {active === 'Connections' && <Connections />}
        {active === 'CarePackages' && <CarePackages />}
        {active === 'FollowUp' && <FollowUp />}
        {active === 'TestimonialVideo' && <TestimonialVideo />}
      </div>
    </div>
  )
}

export default Column1
