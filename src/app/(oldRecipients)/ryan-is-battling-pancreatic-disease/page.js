import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import Ryan from './images/Ryan.webp'
import dynamic from 'next/dynamic'
const CommentSection = dynamic(() => import('../CommentSection'), {
  ssr: false,
})

export const metadata = {
  title: 'Ryan is Battling Pancreatic Disease',
  // description: 'Generated by create next app',
}

const RyanRecipient = () => {
  const id = '719e99d4-4495-4b6d-8788-dcf761e81320'
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent className="md:pt-[28px] md:pb-[35px]">
        <div
          className={'flex flex-col text-primary items-center justify-between'}
        >
          <h1
            className={
              'py-2 max-sm:text-center text-[30px] max-sm:mx-auto font-semibold leading-[40px] md:leading-[50px]'
            }
          >
            Ryan is Battling Pancreatic Disease
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Ryan is Battling Pancreatic Disease
            </p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'pb-[50px] flex flex-col md:flex-row gap-6'}>
          <div
            className={
              'group relative w-fit p-[6px] shadow-sm md:mt-[-6px] md:ml-[-6px]'
            }
          >
            <Link href={'/recipients/Ryan'} className="relative">
              <Image
                src={Ryan}
                placeholder="blur"
                alt="profile picture of Ryan"
                className="min-w-full md:min-w-[250px] lg:min-w-[416px] h-auto"
              />
            </Link>
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <div className={''}>
            <p className={'mb-[11px]'}>
              Our friend Ryan has been bravely battling pancreatic disease since
              he was 5. He was recently hospitalized again fighting an infection
              and is having surgery today.
            </p>
            <p className={'mb-[11px]'}>
              Message from Ryan’s mom:{' '}
              <span className="italic">
                “This past week has truly been the worst week of my life. The
                feeling of almost losing a child is something I want to never
                have to relive again. Ryan was able to push through, but he is
                still fighting so hard. The septic infection took over his
                entire body and is now on many antibiotics. He will be having
                surgery tomorrow to remove his port. I would like to thank
                everyone who reached out to my family during this difficult
                time.”
              </span>
            </p>
            <p className={'mb-[11px]'}>
              Ryan’s Facebook Page: {''}
              <Link
                href="https://www.facebook.com/magnottasrescue/"
                target="_blank"
                className="text-primary underline"
              >
                {"Ryan's Rescue"}
              </Link>
            </p>
            <p className={'mb-[11px]'}>
              Please let Ryan and his family know he is in your thoughts and
              prayers by clicking the heart below (equals a hug), Comment or
              Share.
            </p>
          </div>
        </div>
        <CommentSection id={id} />
      </ContentContainerWithSidebar>
    </div>
  )
}

export default RyanRecipient
