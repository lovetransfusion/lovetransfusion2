import Image from 'next/image'
import React from 'react'
import bgImageDesktop from '@/app/images/section-1-bg-proper-desktop-backup.webp'
import { convertFullMonthString } from '@/utilities/date-and-time/convertFullMonthString'
import { convertToZeroFirst } from '@/utilities/date-and-time/convertToZero'

const TitleSectionSplitB = ({
  parameters: { firstName, category, created_at },
}) => {
  // const date = new Date(created_at)
  // const month = convertFullMonthString(date.getMonth())
  // const thisDate = convertToZeroFirst(date.getDate())
  // const fullYear = date.getFullYear()
  return (
    <div
      className={
        'flex pt-10 pb-[33px] md:pt-[78px] md:pb-[92px] w-full relative'
      }
    >
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col items-center  gap-[20px] md:gap-[39px] z-10'
        }
      >
        <div className={'flex gap-4 text-[14px] items-center'}>
          <p
            className={'bg-primary text-white pt-1 pb-[3px] px-5 rounded-full'}
          >
            {category}
          </p>
          <p className={'text-primary'}>
            Love Transfusion
          </p>
        </div>
        <h1
          className={
            'font-mediumCond text-[40px] md:text-[54px] text-primary leading-[40px] text-center'
          }
        >
          {`Welcome to ${firstName}’s Page!`}
        </h1>
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
  )
}

export default TitleSectionSplitB
