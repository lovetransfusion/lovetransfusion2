import Image from 'next/image'
import React from 'react'
import imagePlaceholder from '../../images/placeholder-image.png'
import BottomSection from './BottomSection'

const StepOne = ({ parameters: { package_image, firstName } }) => {
  return (
    <div className="w-full pt-[33px]">
      <div className={'px-8'}>
        <p
          className={
            'font-demiCond text-[32px] leading-[33px] mb-[17px] text-center'
          }
        >
          Care Packages For {firstName}
        </p>
        <div className={'w-[90px] h-1 mx-auto mb-8 bg-primary'} />
        <p className={'leading-7 text-xl mb-5'}>
          Thank you for helping us send {firstName} care packages filled with
          fun distractions and tangible reminders of love and support.
        </p>
      </div>
      <Image
        src={package_image?.url || imagePlaceholder}
        alt="package image"
        width={552}
        height={306}
        quality={100}
      />
      <div className={'grid grid-cols-3 text-center divide-x divide-[#dadada]'}>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>$0</p>
          <p>raised</p>
        </div>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>0</p>
          <p>donations</p>
        </div>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>$100</p>
          <p>goal</p>
        </div>
      </div>
      <div
        className={'py-5 px-6 border-t-[1px] border-b-[1px] border-[#dadada]'}
      >
        <div
          className={
            'flex h-5 bg-[#e2e8f0] w-full overflow-hidden rounded-full'
          }
        >
          <div className="w-[10%] h-full bg-primary rounded-full"></div>
        </div>
      </div>

      <BottomSection parameters={{ goTo: 2, donee: firstName }} />
    </div>
  )
}

export default StepOne
