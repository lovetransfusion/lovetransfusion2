import Image from 'next/image'
import React, { Suspense } from 'react'
import blueArrow from '../images/bl-arrrow.svg'
import { ArialNarrowBold } from '@/utilities/fonts/fonts'
import PackageImage from '../images/poster-package-template1-orig.png'
import { capitalize } from '@/utilities/capitalize'
import ContributeButton from './ContributeButton'
import ContributeButtonFallback from './ContributeButtonFallback'
import CountdownTimer from './CountdownTimer'

const PackageSection = ({
  parameters: {
    id,
    path_url,
    firstName,
    condition,
    poster_image,
    package_image,
    end_of_campaign,
    opengraph,
  },
}) => {
  const capitalizeFirstName = capitalize(firstName)
  return (
    <div className={'flex py-[50px] text-xl'}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col items-center'
        }
      >
        <div className={'flex justify-center'}>
          <p
            className={
              'font-mediumCond text-[26px] text-primary leading-[33px] text-center'
            }
          >
            {`Will You Help Us Send ${capitalizeFirstName} A Care Package As Well?`}
          </p>
        </div>

        <div className={'flex pt-[33px] justify-center flex-wrap'}>
          <div
            className={'flex flex-col gap-4 basis-full md:basis-[607px] z-10'}
          >
            <p
              className={'font-mediumCond text-[25px] leading-[33px] mb-[-7px]'}
            >
              Love Transfusion Care Packages
            </p>
            <p className={'leading-[22px]'}>
              Filled with fun distractions and tangible reminders of love and
              support, Love Transfusion care packages contain items specifically
              designed to encourage and uplift such as personalized posters,
              books, wristbands, balloons, stuffed animals and toys.
            </p>
            <p className={'leading-[22px]'}>
              Between the contents of the package and shipping, costs add up in
              a hurry. Please consider becoming a sponsor through a donation of
              any amount….
            </p>
            <div className={'flex gap-4 mx-auto mt-3'}>
              <div className={'flex relative items-center'}>
                <div className={'hidden md:flex absolute left-[-74px]'}>
                  <Image src={blueArrow} alt="blue arrow" />
                </div>
                <Suspense fallback={<ContributeButtonFallback />}>
                  <ContributeButton
                    parameters={{
                      id,
                      capitalizeFirstName,
                      condition,
                      package_image,
                      opengraph,
                      path_url,
                    }}
                  />
                </Suspense>
              </div>
            </div>

            <div className={'flex flex-col items-center'}>
              <p
                className={`${ArialNarrowBold.className} mt-[9px] mb-[14px] text-[15px]`}
              >
                TIME REMAINING TO CONTRIBUTE:
              </p>
              {/* Countdown Timer */}
              <CountdownTimer parameters={{ end_of_campaign }} />
            </div>
            <p
              className={'mt-[17px] leading-[22px] text-base'}
            >{`* Donations are tax-deductible. Love Transfusion Inc is a 501(c)(3) nonprofit organization.`}</p>
          </div>
          <div className={'flex max-w-[273px] flex-col relative'}>
            <div className={'w-full h-3'}></div>
            <div
              className={
                'flex ml-[-24px] pt-[21px] xl:min-w-[380px] xl:min-h-[460px]'
              }
            >
              <Image
                src={poster_image?.url ? `${poster_image?.url}` : PackageImage}
                width={380}
                height={460}
                quality={100}
                alt="package image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageSection
