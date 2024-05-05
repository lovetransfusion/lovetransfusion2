import React from 'react'
import Column1 from './column1/Column1'
import Divider from '@/app/components/Divider'
import Image from 'next/image'
import Boscovs from './images/Boscovs.webp'
import Uline from './images/Uline.webp'
import Raceway from './images/Raceway-Ministries.webp'
import PrayForACure from './images/Pray-for-a-Cure-for-Cancer.webp'
import Metro from './images/Metro-Payment-Technologies.webp'
import KaysKamp from './images/Kays-Kamp.webp'

const SectionThree = () => {
  return (
    <div className="mx-auto lg:py-[60px]">
      <div
        className={
          'max-w-[1150px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex flex-col lg:flex-row gap-[45px]'
        }
      >
        <Column1 />
        <div className={'w-full'}>
          <Divider className="mx-auto lg:border-b-[1px] border-[#E5E5E5]">
            <p className={'text-[22px] font-semibold text-primary px-[23px]'}>
              Our Partners
            </p>
          </Divider>
          <div
            className={
              'mt-[25px] grid grid-cols-2 md:grid-cols-3 lg:gap-y-[45px]'
            }
          >
            <Image
              src={Metro}
              quality={100}
              className="mx-auto lg:mr-auto lg:ml-[unset] size-[115px]"
              alt="Metro"
            />
            <Image
              src={PrayForACure}
              quality={100}
              className="mx-auto lg:mx-auto size-[115px]"
              alt="PrayForACure"
            />
            <Image
              src={Boscovs}
              quality={100}
              className="mx-auto lg:ml-auto lg:mr-[unset] size-[115px]"
              alt="Boscovs"
            />
            <Image
              src={Uline}
              quality={100}
              className="mx-auto lg:mr-auto lg:ml-[unset] size-[115px]"
              alt="Uline"
            />
            <Image
              src={KaysKamp}
              quality={100}
              className="mx-auto lg:mx-auto size-[115px]"
              alt="KaysKamp"
            />
            <Image
              src={Raceway}
              quality={100}
              className="mx-auto lg:ml-auto lg:mr-[unset] size-[115px]"
              alt="Raceway"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
