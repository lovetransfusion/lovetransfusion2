import Image from 'next/image'
import React from 'react'
import heart from '../images/heart-proper.png'
import { SegoePrint } from '@/utilities/fonts/fonts'
import TestimonyImage from './TestimonyImage'

const DidYouKnowSplitB = () => {
  return (
    <div
      className={'flex py-[49px] text-xl md:py-[70px] lg:pt-10 lg:pb-[62px]'}
    >
      <div className={'container md:px-6 lg:px-10 xl:px-0 flex justify-center'}>
        <div className={'flex max-w-[1000px] flex-col'}>
          <div
            className={
              'flex gap-3 border-2 border-[#E0F3FF] rounded-[10px] justify-between mt-[85px] pt-[55px] md:pt-[25px] px-[25px] md:pl-[79px] md:pr-[80px] pb-[25px] relative flex-col md:flex-row'
            }
          >
            <div className={'flex flex-col max-w-full md:max-[408px]'}>
              <p
                className={
                  'text-[30px] font-demiCond text-primary leading-[33px] mt-[7px] mb-1'
                }
              >
                Did You Know?
              </p>
              <div
                className={
                  'max-w-[347px] h-[1px] border-b-[1px] border-[#E0F3FF]'
                }
              >
                <p className={' leading-6 mt-[10px]'}>
                  Over 12,000,000 expressions of support and encouragement have
                  been sent through Love Transfusion Inc since 2010. Learn more
                  at LoveTransfusion.com.
                </p>
              </div>
            </div>
            <div className={'flex max-w-full md:max-w-[310px]'}>
              <div className={'flex shadow-custom6'}>
                <TestimonyImage />
              </div>
            </div>
            <div
              className={
                'flex absolute left-[10px] md:left-[-40px] top-[-40px] md:top-[-32px] max-w-[101px]'
              }
            >
              <Image src={heart} alt="love transfusion" />
            </div>
          </div>
          <p
            className={`${SegoePrint.className} text-primary text-[19px] mx-auto mt-[19px] md:mt-[73px] text-center`}
          >
            “One word frees us of all the weight and pain in life. That word is
            Love.” - Sophocles
          </p>
        </div>
      </div>
    </div>
  )
}

export default DidYouKnowSplitB
