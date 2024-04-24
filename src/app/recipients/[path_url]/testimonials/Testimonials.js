import Image from 'next/image'
import React from 'react'
import testimonial1 from './images/testimonial1.png'
import testimonial2 from './images/testimonial2.png'
import testimonial3 from './images/testimonial3.png'
import { listOfTestimonials } from './listOfTestimonials'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <div className={'flex pt-[33px] pb-[47px] '}>
      <div
        className={
          'flex flex-col max-w-[1200px] mx-auto w-full px-[12px] md:px-6 lg:px-10 xl:px-0 flex-wrap md:flex-nowrap items-center gap-5'
        }
      >
        <div
          className={
            'flex w-full items-center flex-col border-b-[1px] border-primary mb-[23px]'
          }
        >
          <p
            className={
              'font-demiCond text-3xl text-primary mb-[-15px] bg-white px-5'
            }
          >
            TESTIMONIALS
          </p>
        </div>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 mt-5 mb-0 lg:mt-[46px] lg:mb-[50px]'
          }
        >
          <Image
            src={testimonial1}
            alt="testimonial1"
            quality={100}
            className="w-full h-auto shadow-custom5"
          />

          <Image
            src={testimonial2}
            alt="testimonial1"
            quality={100}
            className="w-full h-auto shadow-custom5"
          />

          <Image
            src={testimonial3}
            alt="testimonial1"
            quality={100}
            className="w-full h-auto shadow-custom5"
          />
        </div>

        <div
          className={
            'max-w-[1120px] mt-[46px] columns-1 md:columns-2 lg:columns-3 gap-[60px] space-y-[42px]'
          }
        >
          {listOfTestimonials.map((testimony, index) => {
            return (
              <div
                key={index}
                className={'flex flex-col break-inside-avoid gap-[30px]'}
              >
                <p
                  className={'leading-[22px]'}
                >{`“${testimony.testimonial}”`}</p>
                <div className={'flex gap-3'}>
                  <Image
                    key={index}
                    src={testimony.image}
                    width={60}
                    height={60}
                    className="rounded-full"
                    alt="recipient image"
                  />
                  <div className={'flex flex-col gap-[5px]'}>
                    <p className={'font-mediumCond'}>{testimony.name}</p>
                    <p className={'text-sm'}>{testimony.location}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Link
          href={'https://lovetransfusion.com/testimonials/'}
          target="_blank"
        >
          <p className={'underline mt-[19px] text-[17px] text-primary'}>
            Read more testimonials…
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Testimonials
