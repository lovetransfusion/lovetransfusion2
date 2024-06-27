import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'max-sm:leading-[38px] max-sm:text-center text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Privacy Policy
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Privacy Policy</p>
          </div>
        </div>
      </TitleSectionComponent>
      <div className={'py-10 md:py-[80px] text-[15px]'}>
        <div
          className={
            'container md:px-6 lg:px-10 xl:px-0 flex flex-col gap-[41px]'
          }
        >
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>
              We respect our user’s privacy and are committed to protecting it.
            </p>
            <p className={''}>
              The following disclosure explains our policies and practices
              regarding user information. We collect and use visitor information
              for many purposes, including but not limited to, service
              fulfillment; to better understand our user’s needs; to provide
              better services and to communicate with users regarding our
              services.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>
              Information Collected by our Hosting Provider
            </p>
            <p className={''}>
              The hosting provider for this website (as with any Internet site)
              has the ability to record various information, including domain
              name, pages accessed, date and time of access, web browser type
              and computer operating system, and referring information, and to
              disclose this information. This is most commonly done by providing
              access to raw server logs. For more information you should perform
              an Internet search on ‘server logs’ or ‘raw server logs’. We may
              have access to our raw server logs and access reports prepared by
              our hosting provider.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>
              Use of Email Addresses and other Contact Information
            </p>
            <p className={''}>
              An important part of our services includes being able to provide
              information to you. As a user, you expressly consent to receive
              communications from us about Love Transfusion, Inc. and related
              services via email, telephone, mail, or any other delivery method
              you provide. This may include, but is not limited to, information
              about service updates, new features, or information we believe you
              may find interesting and or useful.
            </p>
            <p className={'mt-[3px]'}>
              You may stop email communication from us at any time by replying
              to an email with the word “REMOVE” in the subject or by clicking
              the unsubscribe link at the bottom of the email.
            </p>
            <p className={'mt-[3px]'}>
              We will not sell, rent, or otherwise transfer your email address.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>Identification of Users</p>
            <p className={''}>
              We use personal information in an aggregate form (i.e., not
              individually attributable to you) for business analysis,
              operational, marketing and other promotional purposes.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>Cookies</p>
            <p className={''}>
              Cookies may be used to monitor access to our website and/or
              application. You consent to any future use of cookies for testing
              purposes and the use of cookies for publicly available data to
              gather statistics for the purpose of determining which search
              engines, referring sites, key words, etc., bring visitors to our
              website, which pages visitors are most interested in, what web
              browsers are used, etc. Various providers may be used for this
              purpose. The purpose is to obtain information that will help
              promote the website, make the website more interesting and useful
              to visitors, and to identify areas where improvement is needed.
            </p>
            <p className={'mt-[3px]'}>
              Additionally, various third party information suppliers and other
              entities that provide information for this website, or for use by
              us, may use cookies. Examples include, but are not necessarily
              limited to third party resources we promote.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>Disclosure by Necessity</p>
            <p className={''}>
              Private information may be disclosed if required by a court order,
              statute, law, or regulation.
            </p>
            <p className={'mt-[3px]'}>
              Information is subject to disclosure to address a claim that you
              are violating the terms of any agreement pertaining to your use of
              this website, other products or services we may offer, or the
              rights of any third party.
            </p>
            <p className={'mt-[3px]'}>
              Information is also subject to disclosure if we believe that
              disclosure is necessary to identify, contact or bring an action
              against someone who may be causing injury to or interfering
              (either intentionally or unintentionally) with our rights or
              property, your rights or property, other users of our website,
              application, services, or anyone else.
            </p>
            <p className={'mt-[3px]'}>
              As we continue to develop our services, we may sell or buy other
              businesses or entities, or we may merge with another company, or
              be bought by another company. In such transactions, personal
              information may be one of the transferred assets.
            </p>
            <p className={'mt-[3px]'}>
              Your information may be stored and processed in any country in
              which we maintain facilities or conduct operations. By using our
              website, products and services, you consent to any such transfer
              of information outside of your country.
            </p>
            <p className={'mt-[3px]'}>
              In the event your account becomes inactive, your information may
              remain in our databases, computers, and archives.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={'font-semibold mb-[1px]'}>Policy Changes</p>
            <p className={''}>
              These policies may be amended by us at any time and without
              notice, but will be posted on this page.
            </p>
            <p className={'mt-[3px]'}>
              You agree that your continued use of our websites or services
              after that date will constitute your consent and acceptance of the
              amendment.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <p className={''}>
            LAST UPDATED: January 8, 2015
            </p>
          </div>
        </div>
      </div>
      {/* <ContentContainerWithSidebar className={'text-[15px]'}>
      </ContentContainerWithSidebar> */}
    </div>
  )
}

export default page
