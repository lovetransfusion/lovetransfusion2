import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import Braiden from './images/Braiden.webp'
import dynamic from 'next/dynamic'
const CommentSection = dynamic(() => import('../CommentSection'), {
  ssr: false,
})

export const metadata = {
  title: 'Braiden is Battling Neuroblastoma Again',
  // description: 'Generated by create next app',
}

const BraidenRecipient = () => {
  const id = 'ec9beacf-5d08-425e-a521-0713b6d54697'
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
            Braiden is Battling Neuroblastoma Again
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Braiden is Battling Neuroblastoma Again
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
            <Link href={'/recipients/Braiden'} className="relative">
              <Image
                src={Braiden}
                placeholder="blur"
                alt="profile picture of Braiden"
                className="min-w-full md:min-w-[250px] lg:min-w-[378px] h-auto"
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
              Today is our friend Braiden’s 7th birthday! Unfortunately, his
              family has been told it will most likely be his last after a long
              and brave fight against neuroblastoma. He is really struggling
              right now.
            </p>
            <p className={'mb-[11px]'}>
              9/1/16 UPDATE:{' '}
              <span className="italic">
                “My baby boy left us to be with the angels at 4.55am this
                morning. All family has been informed. We are just devastated
                but we know hes in a better place. Grandad I hope you came to
                collect him.”
              </span>
            </p>

            <p className={'mb-[11px]'}>
              Braiden’s Facebook Page: {''}
              <Link
                href="https://www.facebook.com/BRAIDENLEEPRESCOTT/"
                target="_blank"
                className="text-primary underline"
              >
                Braiden Lee Prescott
              </Link>
            </p>
            <p className={'mb-[11px]'}>
              Please join us in surrounding Braiden’s family with a huge virtual
              group hug of love and comfort by clicking the heart below (equals
              a hug), Comment or Share.
            </p>
          </div>
        </div>
        <CommentSection id={id} />
      </ContentContainerWithSidebar>
    </div>
  )
}

export default BraidenRecipient
