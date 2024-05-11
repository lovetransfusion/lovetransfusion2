import React from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import SocialMediaContactPage from './SocialMediaContactPage'

const ContactPage = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Contact Us
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className='hover:underline'>Home</Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Contact</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <h3 className={'text-[22px] font-semibold'}>Contact information</h3>
        <div className={'mt-[52px] border-b-[1px] pb-5 border-[#E5E5E5]'}>
          <p className={'text-xs mb-[2px] font-semibold'}>Address:</p>
          <p>
            Love Transfusion, Inc.<br></br>
            1201 N. Orange St<br></br>
            Suite 799<br></br>
            Wilmington, DE 19801<br></br>
          </p>
        </div>
        <div className={'mt-[21px] border-b-[1px] pb-5 border-[#E5E5E5]'}>
          <p className={'text-xs mb-[2px] font-semibold'}>Phone number:</p>
          <p>302.838.4232</p>
        </div>
        <div className={'mt-[21px] border-b-[1px] pb-5 border-[#E5E5E5]'}>
          <p className={'text-xs mb-[2px] font-semibold'}>Submit Your Story:</p>
          <p>
            If you would like to be featured in the Love Transfusion Network,
            please go{' '}
            <Link href={'/submit-story'} className="text-primary underline">
              here
            </Link>{' '}
            for more information.
          </p>
        </div>
        <div className={'pt-2'}>
          <SocialMediaContactPage />
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default ContactPage
