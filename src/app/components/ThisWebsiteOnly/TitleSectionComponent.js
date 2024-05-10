import Image from 'next/image'
import React from 'react'
import bgImageDesktop from '@/app/images/section-1-bg-proper-desktop-backup.webp'

const TitleSectionComponent = ({ children }) => {
  return (
    <div className={'relative py-6 md:py-[50px] border-t-2 border-[#AFDFFF]'}>
      <div
        className={
          'max-w-[1150px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex flex-col lg:flex-row gap-4 xl:gap-[unset] justify-between md:items-center z-50'
        }
      >
        <div className={'z-10 w-full'}>{children}</div>
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

export default TitleSectionComponent
