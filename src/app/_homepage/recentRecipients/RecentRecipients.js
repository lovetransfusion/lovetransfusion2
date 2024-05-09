'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { listOfRecipients } from './listOfRecipients'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Link from 'next/link'
import CustomNavigation from '@/app/components/swiperjs/CustomNavigation'

const RecentRecipients = () => {
  const [swiper, setswiper] = useState(null)
  // const [activeIndex, setactiveIndex] = useState(null)

  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }
  // const handlePaginationclick = (i) => {
  //   setactiveIndex(i)
  //   swiper?.slideToLoop(i)
  // }
  return (
    <div
      className={
        'group/swiper max-w-[1160px] mx-auto mt-20 relative px-3 md:px-6 lg:px-10 xl:px-0'
      }
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        onSwiper={(swiper) => setswiper(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        // onSlideChange={(swiper) => {
        //   setactiveIndex(swiper?.realIndex)
        // }}
      >
        {listOfRecipients.map((item, i) => {
          const { desc, imgUrl } = item
          return (
            <SwiperSlide
              key={i}
              className="cursor-grab flex flex-col items-center bg-[#F6F6F6] pt-[25px] pb-5 px-[25px]"
            >
              <div className={''}>
                <div className={'relative min-w-full min-h-[225px] lg:min-h-[225px] lg:w-[225px]'}>
                  <Image
                    src={imgUrl}
                    alt="recipient image"
                    fill
                    sizes="max-width (767px) 100vw, 100vw"
                    className="object-cover select-none"
                  />
                </div>
                <Link href="/">
                  <p
                    className={
                      'mt-[10px] text-[18px] text-center leading-[22px] select-none font-semibold'
                    }
                  >
                    {desc}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <CustomNavigation
        parameters={{
          handlePrev,
          handleNext,
        }}
      />
    </div>
  )
}

export default RecentRecipients
