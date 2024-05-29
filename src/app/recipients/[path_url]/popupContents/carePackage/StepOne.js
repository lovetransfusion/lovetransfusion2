import Image from 'next/image'
import React from 'react'
import imagePlaceholder from '../../images/placeholder-image.png'
import BottomSectionCarePackage from './BottomSectionCarePackage'
import { LazyMotion, m } from 'framer-motion'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const StepOne = ({ parameters: { package_image, firstName, donations } }) => {
  const goal = 100
  const totalAmount = donations?.reduce((acc, item) => {
    return item?.amount + acc
  }, 0)

  const barWidth = 100 - (totalAmount / goal) * 100
  const transformBar = {
    initial: {
      x: '-100%',
    },
    animate: {
      x: barWidth < -100 ? '0%' : `${barWidth}%`,
      transition: {
        duration: 0.5,
        ease: barWidth < -100 ? 'easeOut' : 'backInOut',
      },
    },
  }
  return (
    <div className="w-full pt-[33px]">
      <div className={'px-4 md:px-8'}>
        <p
          className={
            'font-demiCond text-[32px] leading-[33px] mb-[17px] text-center text-balance'
          }
        >
          Care Packages For {firstName}
        </p>
        <div className={'w-[90px] h-1 mx-auto mb-8 bg-primary'} />
        <p className={'leading-7 text-xl mb-10'}>
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
          {donations ? (
            <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>
              ${totalAmount}
            </p>
          ) : (
            <div
              className={
                'w-[60px] h-3 mx-auto rounded-md mt-[5px] mb-[5px] bg-gray-300 text-gray-300 animate-pulse'
              }
            ></div>
          )}
          <p>raised</p>
        </div>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          {donations ? (
            <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>
              {donations?.length}
            </p>
          ) : (
            <div
              className={
                'w-[60px] h-3 mx-auto rounded-md mt-[5px] mb-[5px] bg-gray-300 text-gray-300 animate-pulse'
              }
            ></div>
          )}
          <p>donations</p>
        </div>
        <div className={'text-[#8c8c8c] leading-[22px] py-[10px]'}>
          {donations ? (
            <p className={'text-[#4c4c4c] text-[18px] font-semibold'}>
              ${goal}
            </p>
          ) : (
            <div
              className={
                'w-[60px] h-3 mx-auto rounded-md mt-[5px] mb-[5px] bg-gray-300 text-gray-300 animate-pulse'
              }
            ></div>
          )}
          <p>goal</p>
        </div>
      </div>
      <div
        className={
          'py-5 px-4 md:px-6 border-t-[1px] border-b-[1px] border-[#dadada]'
        }
      >
        <div
          className={`flex h-5 ${
            donations
              ? 'bg-[#e2e8f0]'
              : 'bg-gray-300 text-gray-300 animate-pulse'
          } w-full overflow-hidden rounded-full`}
        >
          {donations && (
            <LazyMotion features={loadFeatures}>
              <m.div
                variants={transformBar}
                initial="initial"
                animate="animate"
                className={`h-full rounded-full w-full bg-primary`}
              ></m.div>
            </LazyMotion>
          )}
        </div>
      </div>

      <BottomSectionCarePackage parameters={{ goTo: 2, donee: firstName }} />
    </div>
  )
}

export default StepOne
