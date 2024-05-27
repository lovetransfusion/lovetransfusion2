import React from 'react'
import BottomSectionAdCampaign from './BottomSectionAdCampaign'

const StepOne = ({
  parameters: { package_image, gender: theGender, firstName },
}) => {
  const gender = theGender === 'male' ? 'he' : 'she'
  return (
    <div className="w-full pt-[33px]">
      <div className={'px-4 md:px-8'}>
        <p
          className={
            'font-demiCond text-[32px] leading-[33px] mb-[17px] text-center text-balance'
          }
        >
          Raising Awareness For {firstName} Campaign Fund
        </p>
        <div className={'w-[90px] h-1 mx-auto mb-8 bg-primary'} />
        <p className={'leading-7 text-xl mb-6 text-center'}>
          {`The more times we can get ${firstName}'s story in front of a caring audience, the more comfort and encouragement ${gender} receives.`}
        </p>
      </div>
      <div
        className={
          'grid grid-cols-3 border-t-[1px] text-center divide-x divide-[#dadada]'
        }
      >
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>$0</p>
          <p>raised</p>
        </div>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>0</p>
          <p>donations</p>
        </div>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>$500</p>
          <p>goal</p>
        </div>
      </div>
      <div
        className={
          'py-5 px-4 md:px-6 border-t-[1px] border-b-[1px] border-[#dadada]'
        }
      >
        <div
          className={
            'flex h-5 bg-[#e2e8f0] w-full overflow-hidden rounded-full'
          }
        >
          <div className="w-[10%] h-full bg-primary rounded-full"></div>
        </div>
      </div>

      <BottomSectionAdCampaign parameters={{ goTo: 2, donee: firstName }} />
    </div>
  )
}

export default StepOne
