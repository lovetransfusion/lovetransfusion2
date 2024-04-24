import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heart from '../images/heart-proper.png'
import { SegoePrint } from '@/utilities/fonts/fonts'
import TestimonyImage from './TestimonyImage'

const WhatIsSection = ({
  parameters: {
    what_is,
    according_to_paragraph,
    learn_more_url,
    learn_more_text,
    more_ways_to_support,
    firstName,
  },
}) => {
  const goFundMeUrl = more_ways_to_support?.goFundMe?.includes('http')
    ? more_ways_to_support?.goFundMe
    : `https://${more_ways_to_support?.goFundMe}`
  const facebookUrl = more_ways_to_support?.facebookPage?.includes('http')
    ? more_ways_to_support?.facebookPage
    : `https://${more_ways_to_support?.facebookPage}`
  const caringBridgeUrl = more_ways_to_support?.caringBridge?.includes('http')
    ? more_ways_to_support?.caringBridge
    : `https://${more_ways_to_support?.caringBridge}`
  const learnMoreUrl = learn_more_url?.includes('http')
    ? learn_more_url
    : `https://${learn_more_url}`

  return (
    <div className={'flex py-[49px] md:py-[70px] lg:py-[102px]'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0 flex justify-center'}>
        <div className={'flex max-w-[1000px] flex-col'}>
          <div className={'flex flex-col gap-[26px]'}>
            <p
              className={
                'font-demiCond text-[30px] leading-[33px] text-primary pb-1'
              }
            >
              {what_is}
            </p>
            <div
              className={'quill text-xl leading-[22px] pr-0 md:pr-[50px]'}
              dangerouslySetInnerHTML={{ __html: according_to_paragraph }}
            ></div>
            <div className={'flex gap-1 md:gap-2 flex-col md:flex-row'}>
              <p className={'text-xl leading-[22px]'}>Learn more:</p>
              <Link
                target="_blank"
                href={learnMoreUrl}
                className="text-primary"
              >
                <p className={'text-xl leading-[22px] capitalize'}>
                  {learn_more_text}
                </p>
              </Link>
            </div>
            {more_ways_to_support && (
              <div className={'flex text-primary flex-col gap-[10px]'}>
                <p className={'font-demiCond text-2xl mt-1 leading-[22px]'}>
                  More ways to support {firstName}
                </p>
                <div className={'flex flex-col text-xl'}>
                  <ul className="leading-[28px]">
                    {more_ways_to_support?.facebookPage && (
                      <li>
                        <Link
                          target="_blank"
                          href={facebookUrl}
                        >{`${firstName}’s Facebook Page`}</Link>
                      </li>
                    )}
                    {more_ways_to_support?.goFundMe && (
                      <li>
                        <Link
                          target="_blank"
                          href={goFundMeUrl}
                        >{`${firstName}’s goFundMe`}</Link>
                      </li>
                    )}
                    {more_ways_to_support?.caringBridge && (
                      <li>
                        <Link
                          target="_blank"
                          href={caringBridgeUrl}
                        >{`${firstName}’s caringBridge`}</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
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
                className={'max-w-[347px] h-[1px] border-b-[1px] border-[#E0F3FF]'}
              >
                <p className={'text-xl leading-6 mt-[10px]'}>
                  Over 12,000,000 expressions of support and encouragement have
                  been sent through Love Transfusion Inc since 2010. Learn more
                  at{' '}
                  <span className="text-primary">
                    <Link href={'/'}>LoveTransfusion.com</Link>
                  </span>
                  .
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

export default WhatIsSection
