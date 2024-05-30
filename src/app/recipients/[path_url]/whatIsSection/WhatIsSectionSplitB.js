import Icon_ribbon from '@/app/components/icons/Icon_ribbon'
import Link from 'next/link'
import React from 'react'

const WhatIsSectionSplitB = ({
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
    <div
      className={
        'flex py-[49px] text-xl md:pt-[54px] md:pb-[53px]'
      }
    >
      <div className={'container md:px-6 lg:px-10 xl:px-0 flex justify-center'}>
        <div className={'flex max-w-[1000px] flex-col'}>
          <div className={'flex flex-col gap-[26px]'}>
            <div className={'flex items-center pb-1 gap-2'}>
              {/* <Image src={ribbon} alt="ribbon" quality={100} className='w-fit max-h-7 text-primary' /> */}
              <Icon_ribbon className="text-primary size-7" />
              <p
                className={
                  'font-demiCond text-[30px] leading-[33px] text-primary'
                }
              >
                {what_is}
              </p>
            </div>
            <div
              className={'quill  leading-[22px] pr-0 md:pr-[50px]'}
              dangerouslySetInnerHTML={{ __html: according_to_paragraph }}
            ></div>
            <div className={'flex gap-1 md:gap-2 flex-col md:flex-row'}>
              <p className={' leading-[22px]'}>Learn more:</p>
              <Link
                target="_blank"
                href={learnMoreUrl}
                className="text-primary"
              >
                <p className={'leading-[22px] capitalize'}>{learn_more_text}</p>
              </Link>
            </div>
            {more_ways_to_support && (
              <div className={'flex text-primary flex-col gap-[10px]'}>
                <p className={'font-demiCond text-2xl mt-1 leading-[22px]'}>
                  More ways to support {firstName}
                </p>
                <div className={'flex flex-col'}>
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
                        >{`${firstName}’s GoFundMe`}</Link>
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
        </div>
      </div>
    </div>
  )
}

export default WhatIsSectionSplitB
