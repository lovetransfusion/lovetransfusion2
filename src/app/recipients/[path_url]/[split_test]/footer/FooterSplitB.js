import Image from 'next/image'
import React from 'react'
import footerLogo from '../images/footer-logo.png'
import utilityStore2 from '@/utilities/store/utilityStore'
import { useStore } from 'zustand'
import dynamic from 'next/dynamic'

const Toast = dynamic(() => import('@/app/components/Toast'), { ssr: false })

const FooterSplitB = () => {
  const { toast, settoast } = useStore(utilityStore2)
  const currentYear = new Date().getFullYear()
  return (
    <div className={'flex flex-col'}>
      {toast && <Toast parameters={{ toast, settoast }} />}
      <div
        className={
          'flex bg-[#288ccc] justify-center px-3 md:px-6 lg:px-8 pt-[30px] pb-12'
        }
      >
        <div
          className={
            'flex max-w-[1194px] w-full flex-wrap md:flex-nowrap gap-6 md:gap-10 justify-between'
          }
        >
          <div className={'flex basis-[100%] md:basis-[390px] flex-col gap-3'}>
            <div className={'flex max-w-[378px]'}>
              <Image src={footerLogo} alt="logo" />
            </div>
            <p className={'text-[#f0f8fc] leading-[20px]'}>
              Love Transfusion, Inc. is a non-profit organization with a mission
              to help individuals facing difficult situations. We believe that
              by connecting people who hurt with those who care, the resulting
              expressions of love and encour- agement help ease people through
              life’s most difficult moments.
            </p>
          </div>
          <div className={'flex basis-[100%] md:basis-[342px] flex-col'}>
            <p className={'mt-3 text-[#f5fbff] leading-[33px] text-2xl mb-2'}>
              TESTIMONIALS
            </p>
            <p className={'text-[#f0f8fc] italic leading-5'}>
              “Thank you for doing this for my Mom! You have no idea what this
              means to me! Also to able to show her that she has support all
              over the place and she not alone! This means everything! Thank
              You!”
            </p>
            <p className={'text-[#f0f8fc] leading-5 mt-[3px]'}>
              Wendy O. - <span className="italic">Utah</span>
            </p>
          </div>
          <div
            className={'flex basis-[100%] md:basis-[240px] flex-col gap-[7px]'}
          >
            <p className={'mt-3 text-[#f5fbff] leading-[33px] text-2xl'}>
              CONTACT
            </p>
            <div className={'flex flex-col'}>
              <p className={'font-demiCond text-xl text-[#f0f8fc] leading-5'}>
                Love Transfusion, Inc.
              </p>
              <p className={'text-[#f0f8fc] leading-[22px]'}>
                1201 N Orange St, Suite 799 Wilmington, DE 19801
              </p>
              <p className={'text-[#f0f8fc] leading-5'}>
                (800) 291-7276 | (302) 838-4232
              </p>
              <p className={'mt-3 text-[#f0f8fc] leading-5'}>
                {`501(c)(3) Nonprofit Organization Tax ID #27-2829895`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'flex justify-center px-3 md:px-6 lg:px-8 bg-[#288ccc] border-t-[1px] border-[#77bde5] pt-6 pb-[25px]'
        }
      >
        <div
          className={
            'flex max-w-[1210px] w-full flex-wrap md:flex-nowrap gap-2 md:gap-10 justify-between'
          }
        >
          <p className={'text-[#f5fbff] text-sm'}>
            Copyright © 2010-{currentYear} Love Transfusion, Inc.
          </p>
          <p className="text-[#f5fbff] text-sm">
            {`A 501(c)(3) Nonprofit Organization – Privacy Policy`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterSplitB
