import React from 'react'
import { roboto } from '@/utilities/fonts/fonts'
import cancerBoy from './images/cancer-boy-tinypng.jpg'
import grandParents from './images/6a-proper-tinypng.jpg'
import Image from 'next/image'
import bgImageDesktop from '@/app/images/section-1-bg-proper-desktop-backup.webp'

const TitleSection = () => {
  return (
    <div
      className={
        'relative py-6 md:pt-[53px] md:pb-10 border-t-[3px] border-[#AFDFFF]'
      }
    >
      <div
        className={
          'max-w-[1084px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex flex-col lg:flex-row gap-4 xl:gap-[unset] justify-between md:items-center'
        }
      >
        <div className="z-10 text-primary text-center md:text-left max-w-[460px] leading-[25px]">
          <p className={'text-3xl md:text-4xl leading-[56px] mt-[-2px]'}>
            Love Transfusion, Inc.
          </p>
          <p
            className={`relative text-lg max-md:text-balance md:text-xl md:ml-[10px] mt-[2px] md:before:content-['"'] md:before:absolute md:before:left-[-7px]`}
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
        <div
          className={
            'flex justify-center lg:justify-end relative z-10 lg:pr-[58px] items-end'
          }
        >
          <Image
            src={grandParents}
            priority
            quality={100}
            className="w-[200px] md:hidden lg:block rounded-[4px] shadow-md mr-[-37px] mb-2 z-10"
            alt="grandparents holding laptop"
          />
          <Image
            src={cancerBoy}
            priority
            quality={100}
            className="w-[170px] md:hidden lg:block rounded-[4px] shadow-md"
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
        className="object-cover object-bottom bg-bottom"
      />
    </div>
  )
}

export default TitleSection
