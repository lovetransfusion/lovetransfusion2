import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import React from 'react'
import carepackage from './images/care-package-300x199.webp'
import Image from 'next/image'
import Link from 'next/link'
import carepackage1 from './images/care-package2.webp'
import carepackage2 from './images/care-package3.webp'
import carepackage3 from './images/care-package4.webp'

const CarePackages = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Care Packages
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Care Packages</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'pb-9'}>
          <div
            className={
              'bg-primary-100 md:float-left w-fit md:mr-[30px] md:mb-[35px] max-sm:mb-6 '
            }
          >
            <Image
              src={carepackage}
              alt="Care package"
              placeholder="blur"
              quality={100}
              priority
              className="md:w-[292px] h-auto"
            />
          </div>
          <p className={''}>
            Each user is contacted by the site administrators and given an
            opportunity to receive a customized care package containing toys,
            books, CD’s and other materials that is appropriate for their age
            and situation. We try to include gifts for siblings in the care
            packages too.
          </p>
        </div>
        <div
          className={
            'border-t-[1px] border-[#E5E5E5] clear-start flex flex-col gap-[10px] py-[34px]'
          }
        >
          <p className={'italic'}>
            “I just wanted to write and thank you for the letter and package you
            sent to me at just that moment when I received it, I was feeling
            very discouraged and down and a little like I would never get
            through what I thought was impossible! …These books that you gave me
            have been encouragements each and every day and I thank you for
            that.”
          </p>
          <p className={''}>Laura R. (Liver Transplant Patient)</p>
        </div>
        <div
          className={
            'border-t-[1px] border-[#E5E5E5] clear-start flex flex-col gap-[10px] py-[34px]'
          }
        >
          <p className={'italic'}>
            “Thank you for encouraging me & for what you are doing for so many
            others!”
          </p>
          <p className={''}>Katie W. (Cancer Patient)</p>
        </div>
        <div
          className={
            'border-t-[1px] border-[#E5E5E5] clear-start flex flex-col gap-[10px] py-[34px]'
          }
        >
          <p className={'italic'}>
            “Thank you for the cool package you sent. Also, thanks for sending
            goodies to my sisters and brother!”
          </p>
          <p className={''}>Gerrit B. (Cancer Patient)</p>
          <div className={'flex flex-col md:flex-row gap-[45px] mt-[51px]'}>
            <Image src={carepackage1} alt="Care package" quality={100} />
            <Image src={carepackage2} alt="Care package" quality={100} />
            <Image src={carepackage3} alt="Care package" quality={100} />
          </div>
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default CarePackages
