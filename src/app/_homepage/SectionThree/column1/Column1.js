import React from 'react'
import Mission from './Mission'
import Connections from './Connections'
import CarePackages from './CarePackages'
import FollowUp from './FollowUp'
import TestimonialVideo from './TestimonialVideo'

const Column1 = ({ children }) => {
  return (
    <div className="text-[15px] lg:w-[560px] lg:min-w-[560px]">
      <div className={'flex bg-[#0CA2E0] text-white'}>
        <p className="px-[15px] hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5">
          Mission
        </p>
        <p className="px-[15px] hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5">
          Connections
        </p>
        <p className="px-[15px] hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5">
          Care Packages
        </p>
        <p className="px-[15px] hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5">
          Follow Up
        </p>
        <p className="px-[15px] hover:bg-[#30B0E5] cursor-pointer pt-[9px] pb-[7px] leading-5">
          Testimonials
        </p>
      </div>
      <div className={'bg-[#F6F6F6] py-5 pl-[25px] pr-5 text-[#354959]'}>
        {/* <Mission /> */}
        {/* <Connections /> */}
        {/* <CarePackages /> */}
        {/* <FollowUp /> */}
        <TestimonialVideo />
      </div>
    </div>
  )
}

export default Column1
