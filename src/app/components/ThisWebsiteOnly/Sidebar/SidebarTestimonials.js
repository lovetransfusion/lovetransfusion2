'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CustomPagination from '@/app/components/swiperjs/CustomPagination'
import melissa from '@/app/recipients/[path_url]/[split_test]/testimonials/images/Melissa-D-Dace.webp'
import miette from '@/app/recipients/[path_url]/[split_test]/testimonials/images/Miette.jpg'
import elizabeth from '@/app/recipients/[path_url]/[split_test]/testimonials/images/Elizabeth.png'
import chris from '@/app/recipients/[path_url]/[split_test]/testimonials/images/Chris.png'
import braiden from '@/app/recipients/[path_url]/[split_test]/testimonials/images/Braiden.png'
import trisha from '@/app/recipients/[path_url]/[split_test]/testimonials/images/Trisha-K-Preston.webp'
import alex from '@/app/components/ThisWebsiteOnly/Footer/images/Alex-60x60.webp'
import dace from '@/app/(about)/mission/images/Dace-60x60.webp'
import ethan from './images/Ethan-60x60.webp'
import lauren from './images/Lauren-60x60.webp'
import { Autoplay } from 'swiper/modules'

const SidebarTestimonials = () => {
  const [swiper, setswiper] = useState(null)
  const [activeIndex, setactiveIndex] = useState(null)
  const handlePaginationclick = (i) => {
    setactiveIndex(i)
    swiper?.slideToLoop(i)
  }
  const listOfTestimonies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="group/swiper w-[100%] relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        loop={true}
        autoHeight={true}
        slidesPerView={1}
        onSwiper={(swiper) => setswiper(swiper)}
        onSlideChange={(swiper) => {
          setactiveIndex(swiper?.realIndex)
        }}
      >
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Oh wow, you guys have made our night, week, month… my daughter is
            so excited. She is absolutely over the moon! Thank you for your love
            and prayers and well wishes. Thank you so very much Love
            Transfusion.”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={miette}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Miette – Brain Cancer</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Natalie S. - Australia
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Thank you all so very very much for the sweet comments and prayers.
            I love the love that you all have for my sweet son!”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={melissa}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Melissa D.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Elizabeth was so excited to see all the well wishes and prayers
            sent from so many people. It was absolutely amazing! Thank you for
            being so sweet and considerate!”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={elizabeth}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Elizabeth – Brain Tumor</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Lisa M. - Decatur, AR
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “My son’s page on Love Transfusion has reached over 10,000 likes,
            and over 1,000 comments, and 2,000 shares! We are so happy and
            excited for him! We’ve had people from all around the world sending
            him prayers, love, and birthday wishes. I’m so happy for him that it
            brings me to tears… Thank you, Love Transfusion!”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={trisha}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Trisha K.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “My son Chris was facing relapse of his hodgkin’s lymphoma. At 14 he
            was scared and worried. Some one said I should write to Love
            Transfusion for help getting the support he needed while waiting.
            And over the weekend before his surgery the outpouring of support
            and prayers was almost overwhelming. And it also helped us connect
            with others that have faced what we were facing! We cannot express
            our thanks and gratitude enough for Love Transfusions! And can’t
            wait to see what’s to come! Thank you from our family and the entire
            Chris’s Crew!”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={chris}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Chris – Lymphoma</p>
              <p className={'text-[#35495980] mt-[5px]'}>Michelle - NC</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “I’d just like to say a very, very big thank you to you for doing a
            post about my nephew. My sister and myself have sat down and read
            each and every one of the messages of hope that have been posted and
            we have both been in tears at the amount of love and good wishes
            coming his way because of this post. I am very proud to be part of
            the Love Transfusion community and thank you so, so much from the
            bottom of my heart.”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={braiden}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Braiden – Neuroblastoma</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Sharon W.- Manchester, UK
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Thank you all so very very much for the sweet comments and prayers.
            I love the love that you all have for my sweet son!”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={dace}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Dace – Leukemia</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Melissa D. - Las Vegas, NV
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Thank you for the awesome support!”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={alex}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Alex – Bone Cancer</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Alex R. - Orlando, Florida
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Thank you to all of you who pray for my grandson and his family.
            thank you for the tremendous support you extended, we will be
            forever grateful to all of you.”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={ethan}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Ethan – Brain Cancer</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Marie N. - Philippines
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className={'text-[#354959] text-sm leading-[25px]'}>
            “Love Transfusion is a fantastic idea, and gives people hope and to
            let people know that there are people who care. I am truly amazing
            by all of the support. Your page gave me hope knowing there are
            people around the world that care. Thank you for such a wonderful
            peace of mind and support. Knowing I’m not alone.”
          </p>
          <div className={'flex items-center gap-[15px] mt-5'}>
            <Image
              src={lauren}
              quality={100}
              className="rounded-full size-[60px]"
              alt="receipient's profile picture"
            />
            <div className={'text-sm'}>
              <p>Lauren – Leukemia</p>
              <p className={'text-[#35495980] mt-[5px]'}>
                Lauren J. - Australia
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <CustomPagination
        className={'mt-[22px]'}
        parameters={{
          array: listOfTestimonies,
          handlePaginationclick,
          activeIndex,
        }}
      />
    </div>
  )
}

export default SidebarTestimonials
