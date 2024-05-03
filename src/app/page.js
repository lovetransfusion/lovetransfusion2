import React from 'react'
import MainNavigation from './components/Navigation/MainNavigation'
import { openSans, roboto } from '@/utilities/fonts/fonts'
import cancerBoy from './images/cancer_boy.jpg'
import grandParents from './images/6a.jpg'
import Image from 'next/image'
import bgImageDesktop from '@/app/images/section-1-bg-proper-desktop-backup.webp'

export const revalidate = 30

const Homepage = () => {
  return (
    <div className={`${openSans.className} bg-green-50 min-h-[2500px]`}>
      <MainNavigation />

      <div className={'relative py-6 md:py-16'}>
        <div
          className={
            'max-w-[1084px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex flex-col md:flex-row gap-4 md:gap-[unset] justify-between'
          }
        >
          <div className="z-10 text-primary text-center md:text-left max-w-[460px] leading-[25px]">
            <p className={'text-3xl md:text-[43px] font-light leading-[56px]'}>
              Love Transfusion, Inc.
            </p>
            <p
              className={`${roboto.className} relative text-lg max-md:text-balance md:text-xl md:ml-[10px] mt-[2px] md:before:content-['"'] md:before:absolute md:before:left-[-7px]`}
            >
              <span className="md:hidden">{`"`}</span>
              {
                'One word frees us of all the weight and pain in life. That word is Love."'
              }
            </p>
            <p
              className={`${roboto.className} text-[18px] md:text-right md:mr-[55px] italic`}
            >
              - Sophocles
            </p>
          </div>
          <div className={'flex justify-center md:justify-end relative z-10 md:pr-[58px] items-end'}>
            <Image
              src={grandParents}
              width={200}
              height={112}
              priority
              quality={100}
              className="w-[200px] h-[112px] rounded-[4px] shadow-md mr-[-35px] mb-2 z-10"
              alt="grandparents holding laptop"
            />
            <Image
              src={cancerBoy}
              width={170}
              height={154}
              priority
              quality={100}
              className="w-[170px] h-[154px] rounded-[4px] shadow-md"
              alt="boy with cancer holding tablet"
            />
          </div>
        </div>
        <Image
          src={bgImageDesktop}
          alt="multiple hearts background"
          fill
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88/F/PQAIygNNDcWtvQAAAABJRU5ErkJggg=="
          priority
          quality={100}
          sizes="(min-width: 767px) 100vw, 100vw"
          loading="eager"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Homepage
