import Image from 'next/image'
import React from 'react'
import childHoldingTablet from '../images/child-holding-tablet.png'
import heart from '../images/heart-proper.png'
import ltWristbandDesktop from '../images/lt-wristband-proper-desktop-orig-354x164.png'

const FifthSectionSplitB = ({ condition }) => {
  return (
    <div className={'flex py-[18px] bg-[#E0F3FF]'}>
      <div
        className={
          'flex w-full pt-[39px] pb-[30px] border-b-2 border-white border-t-2'
        }
      >
        <div
          className={
            'max-w-[1074px] mx-auto px-3 md:px-6 lg:px-10 xl:pl-1 xl:pr-[10px] flex flex-col md:flex-row justify-center lg:justify-between'
          }
        >
          <div className={'flex basis-[220px] justify-center md:justify-start'}>
            <div className={`flex relative md:mt-9 lg:mt-0`}>
              <div
                className={
                  'flex rounded-full border-primary h-fit border-[6px] shadow-custom1'
                }
              >
                <div
                  className={
                    'flex relative size-[195px] box-border rounded-full overflow-hidden border-white border-[5px]'
                  }
                >
                  <Image
                    src={childHoldingTablet}
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    alt="Picture of the recipient"
                    // style={{ left: '-3px', top: '-2px' }}
                    className="absolute top-0 object-cover min-w-[183px] min-h-[183px]"
                  />
                </div>
              </div>
              <div
                className={`flex absolute bottom-[9px] right-[-2px] size-[69px]`}
              >
                <Image
                  src={heart}
                  alt="love transfusion"
                  className={`z-10 size-[69px]`}
                />
              </div>
            </div>
          </div>

          <div
            className={
              'flex flex-col basis-auto md:basis-[450px] gap-[7px] pl-0 md:pl-[27px] pr-0 md:pr-2 items-center md:items-start'
            }
          >
            <p className={'font-mediumCond text-lg text-primary pt-[13px]'}>
              LOVE WORKS
            </p>
            <p
              className={
                'text-[#050505] font-demiCond text-3xl leading-[33px] pb-[4px]'
              }
            >
              RESEARCH HAS SHOWN...
            </p>
            <p
              className={
                'text-xl text-[#050505] leading-[24px] text-center md:text-left'
              }
            >
              Social support can play a significant role in the mental and
              phyisical well-being of children bat- tling{' '}
              {condition.toLowerCase()}
            </p>
          </div>

          <div
            className={
              'flex flex-col items-center justify-center mt-[13px] md:mt-0 md:items-end gap-[17px]'
            }
          >
            <div className={'flex max-w-[354px] max-h-[164px]'}>
              <Image
                src={ltWristbandDesktop}
                quality={100}
                alt="love transfusion wristband"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthSectionSplitB
