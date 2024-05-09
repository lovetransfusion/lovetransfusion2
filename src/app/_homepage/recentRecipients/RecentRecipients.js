'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { listOfRecipients } from './listOfRecipients'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Link from 'next/link'
import CustomNavigation from '@/app/components/swiperjs/CustomNavigation'
import Divider from '@/app/components/Divider'
import Button from '@/app/components/Button'

// const { Swiper, SwiperSlide } = dynamic(() => import('swiper/react'), {
//   ssr: false,
// })
// const { Autoplay } = dynamic(() => import('swiper/modules'), { ssr: false })

const RecentRecipients = () => {
  const [swiper, setswiper] = useState(null)

  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }
  return (
    <div
      className={
        'max-w-[1150px] mx-auto mt-9 relative px-3 md:px-6 lg:px-10 xl:px-0'
      }
    >
      <Divider className="border-b-[1px] border-[#E5E5E5]">
        <div className={'px-[22px]'}>
          <p
            className={
              'px-[22px] py-[11px] text-[22px] text-white font-semibold bg-primary'
            }
          >
            Recent Recipients
          </p>
        </div>
      </Divider>
      <div className={'group/swiper mt-5'}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          slidesPerView={1.13}
          onSwiper={(swiper) => setswiper(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3.97,
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
                  <div
                    className={
                      'relative min-w-full min-h-[225px] lg:min-h-[225px] lg:w-[225px]'
                    }
                  >
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
          className={'hidden md:block'}
          parameters={{
            handlePrev,
            handleNext,
          }}
        />
      </div>
      <div className={'w-fit mx-auto'}>
        <Link href={'/recipients'}>
          <Button className="mx-auto mt-[30px]">See more recipients...</Button>
        </Link>
      </div>
    </div>
  )
}

export default RecentRecipients
