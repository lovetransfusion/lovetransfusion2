import Image from 'next/image'
import React from 'react'
import globe from './images/globe.jpg'
import sad2senior from './images/sad2senior.jpg'
import grief from './images/grief.jpg'
import Button from '@/app/components/Button'
import Link from 'next/link'

const SectionFour = () => {
  return (
    <div className="py-6">
      <div
        className={
          'max-w-[1150px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 grid grid-cols-1 md:grid-cols-3 gap-[30px]'
        }
      >
        <div className={'px-[25px] pt-[25px] pb-[30px] bg-[#F6F6F6]'}>
          <Image src={globe} alt="Globe connecting people" quality={100} />
          <p
            className={
              'text-[18px] leading-[22px] font-semibold mb-[10px] text-center mt-5'
            }
          >
            Proprietary Software Platform
          </p>
          <p className={'text-sm leading-[22px] text-center mb-[15px]'}>
            Our flagship services are web applications which quickly & easily
            allow people to connect.
          </p>
          <Button className="mx-auto cursor-default">Comming Soon</Button>
        </div>
        <div className={'px-[25px] pt-[25px] pb-[30px] bg-[#F6F6F6]'}>
          <Image src={grief} alt="Grief" quality={100} />
          <p
            className={
              'text-[18px] leading-[22px] font-semibold mb-[10px] text-center mt-5'
            }
          >
            We Depend on Donor Support
          </p>
          <p className={'text-sm leading-[22px] text-center mb-[15px]'}>
            Love Transfusion provides a variety of services & can only do so
            with help from people like you.
          </p>
          <Link href={'/donate'}>
            <Button className="mx-auto">Read details</Button>
          </Link>
        </div>
        <div className={'px-[25px] pt-[25px] pb-[30px] bg-[#F6F6F6]'}>
          <Image src={sad2senior} alt="Sad face of a senior" quality={100} />
          <p
            className={
              'text-[18px] leading-[22px] font-semibold mb-[10px] text-center mt-5'
            }
          >
            Personalized Care Packages
          </p>
          <p className={'text-sm leading-[22px] text-center mb-[15px]'}>
            We send customized packages for each Recipient …handled and shipped
            with love.
          </p>
          <Link href={'/care-packages'}>
            <Button className="mx-auto">Read details</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
