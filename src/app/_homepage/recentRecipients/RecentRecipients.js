'use client'
import Image from 'next/image'
import React from 'react'
import { listOfRecipients } from './listOfRecipients'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const RecentRecipients = () => {
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0'}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="flex"
      >
        {listOfRecipients.map((item, i) => {
          const { desc, imgUrl } = item
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center bg-[#F6F6F6] w-fit px-[25px]">
                <div className={'max-h-[225px] h-full'}>
                  <Image src={imgUrl} alt="recipient image" />
                </div>
                <p className={'text-[18px] text-center'}>{desc}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default RecentRecipients
