'use client'
import Divider from '@/app/components/Divider'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { listOfTestimonies } from './listOfTestimonies'
import CustomPagination from '@/app/components/swiperjs/CustomPagination'

// const { Swiper, SwiperSlide } = dynamic(() => import('swiper/react'), {
//   ssr: false,
// })

const Testimonials = () => {
  const [swiper, setswiper] = useState(null)
  const [activeIndex, setactiveIndex] = useState(null)
  const handlePaginationclick = (i) => {
    setactiveIndex(i)
    swiper?.slideToLoop(i)
  }
  return (
    <div className="pb-5">
      <div
        className={'max-w-[1150px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex '}
      >
        <div className={'w-full'}>
          <Divider className="border-b-[1px] border-[#E5E5E5]">
            <div className={'px-[22px]'}>
              <p
                className={
                  'px-[22px] py-[11px] text-[22px] text-white font-semibold bg-primary'
                }
              >
                Testimonials
              </p>
            </div>
          </Divider>

          <div className="group/swiper mt-[30px] relative">
            <Swiper
              loop={true}
              //   spaceBetween={20}
              autoHeight={true}
              slidesPerView={1}
              onSwiper={(swiper) => setswiper(swiper)}
              onSlideChange={(swiper) => {
                setactiveIndex(swiper?.realIndex)
              }}
            >
              {listOfTestimonies.map((item, i) => {
                const { comment, image, name, subText } = item
                return (
                  <SwiperSlide key={i} className="px-6 cursor-grab">
                    <p className="text-[15px]">{comment}</p>
                    <div className={'flex gap-4 mt-5'}>
                      <Image
                        src={image}
                        alt="commentator image"
                        className="rounded-full"
                      />
                      <div className={'flex flex-col justify-center gap-[3px]'}>
                        <p className={'text-sm font-semibold'}>{name}</p>
                        {subText && (
                          <p className={'text-[13px] font-semibold'}>
                            Darlington, United Kingdom
                          </p>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <CustomPagination
              className={'mt-[42px]'}
              parameters={{
                array: listOfTestimonies,
                handlePaginationclick,
                activeIndex,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
