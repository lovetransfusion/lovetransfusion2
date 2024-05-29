'use client'
import Image from 'next/image'
import React from 'react'
import miette from '@/app/recipients/[path_url]/testimonials/images/Miette.jpg'
import icon44 from './images/icon44.webp'
import { Arial } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import SocialMediaIcons from './SocialMediaIcons'
import { restrictedPathsFooter } from '@/utilities/restrictedPaths'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathName = usePathname()
  const restricted = restrictedPathsFooter.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )
  if (restricted) return

  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <div className={`${Arial.className} pt-12 pb-[42px] bg-[#F7F7F7]`}>
        <div
          className={
            'max-w-[1200px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 grid grid-cols-1 lg:grid-cols-3 gap-y-6 text-sm text-[#676B6D] leading-[25px]'
          }
        >
          <div className={'lg:px-3 xl:px-[25px]'}>
            <p className={'text-base text-[#262b2e] mb-[13px]'}>
              ABOUT LOVE TRANSFUSION
            </p>
            <p>
              Love Transfusion, Inc. is a non-profit organization with a mission
              to help individuals facing difficult situations. The sad fact is,
              there are people all around us in the grip of fear, pain and
              loneliness. We believe that by connecting people who hurt with
              those who care, the resulting expressions of love and
              encouragement help ease people through life’s most difficult
              moments.
            </p>
          </div>
          <div className={'lg:px-3 xl:px-[25px]'}>
            <p className={'text-base text-[#262b2e] mb-[13px]'}>TESTIMONIALS</p>
            <p>
              “Oh wow, you guys have made our night, week, month… my daughter is
              so excited. She is absolutely over the moon! Thank you for your
              love and prayers and well wishes. Thank you so very much Love
              Transfusion.”
            </p>
            <div className={'flex items-center gap-4 mt-6'}>
              <Image
                src={miette}
                alt="testimony picture"
                className="rounded-full size-[60px]"
              />
              <div className={'text-[#262b2e]'}>
                <p className={''}>Natalie S. - Australia</p>
              </div>
            </div>
          </div>
          <div className={'lg:px-3 xl:px-[25px]'}>
            <p className={'text-base text-[#262b2e] mb-[13px]'}>CONTACT INFO</p>
            <p>
              Love Transfusion, Inc. is a 501(c)(3) nonprofit org. | Tax ID
              #27-2829895
            </p>
            <p className={'text-[#262b2e] mt-[10px] mb-[5px]'}>Address:</p>
            <p>1201 N Orange St, Suite 799 | Wilmington, DE 19801</p>
            <p className={'text-[#262b2e] mt-[15px] mb-[5px]'}>Phone Number:</p>
            <p>302.838.4232</p>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <div className={`${Arial.className}pt-5 bg-[#F7F7F7]`}>
        <div
          className={
            'max-w-[1150px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 flex justify-between items-center border-t-[1px] border-[#DFDFDF] py-[17px]'
          }
        >
          <div className={'flex items-center gap-[10px]'}>
            <Image src={icon44} alt="love transfusion heart icon" />
            <p className={'text-[#a7aaac] text-[13px]'}>
              {`Copyright © 2010-${year} Love Transfusion, Inc.`}
            </p>
          </div>
          <p className={'text-[#a7aaac] text-[13px]'}>
            A 501(c)(3) nonprofit organization -{' '}
            <Link href={'/privacy-policy'}>
              <span>Privacy Policy</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
