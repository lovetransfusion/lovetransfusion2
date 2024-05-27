import Image from 'next/image'
import React from 'react'
import wristBand from '../images/wrist-band.png'

const WristHugSection = () => {
  return (
    <div className={'flex py-[13px] bg-[#E0F3FF]'}>
      <div
        className={
          'flex w-full pt-[29px] pb-[25px] border-b-2 border-white border-t-2'
        }
      >
        <div
          className={
            'container md:px-6 lg:px-10 xl:px-0 flex pl-0 md:pl-[37px] pr-0 md:pr-11 justify-center'
          }
        >
          <div className={'flex max-sm:px-3 max-w-[697px]'}>
            <Image
              src={wristBand}
              width={697}
              height={108}
              alt="wrist band"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WristHugSection
