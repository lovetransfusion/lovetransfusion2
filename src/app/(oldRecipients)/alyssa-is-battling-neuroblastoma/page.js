import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import Alyssa from './images/Alyssa.webp'
import dynamic from 'next/dynamic'
const CommentSection = dynamic(() => import('../CommentSection'), {
  ssr: false,
})

export const metadata = {
  title: 'Alyssa is Battling Neuroblastoma',
  // description: 'Generated by create next app',
}

const AlyssaRecipient = () => {
  const id = 'f300622f-6bef-4a82-bc9d-3abae451b0e3'
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
            Alyssa is Battling Neuroblastoma
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Alyssa is Battling Neuroblastoma
            </p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'pb-[50px]'}>
          <div
            className={
              'group relative w-fit p-[6px] mt-[-6px] ml-[-6px]  shadow-sm md:float-left md:mr-6 mb-6'
            }
          >
            <Link href={'/recipients/Alyssa'} className="relative">
              <Image
                src={Alyssa}
                placeholder="blur"
                alt="profile picture of Alyssa"
                className="min-w-full lg:w-[410px] h-auto"
              />
            </Link>
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <p className={'mb-[11px]'}>
            Sweet baby Alyssa is battling neuroblastoma (a form of childhood
            cancer). She was born December 27th, 2016.
          </p>
          <p className={'mb-[11px]'}>
            From Alyssa’s Facebook Page:{' '}
            <span className="italic">
              “The doctors had found, thru intense testing and scans over the
              last couple weeks of pregnancy 3 Neuroblastoma tumors the size of
              golf balls. One on each adrenal gland the other on her
              Bladder/pelvic. We have been told shes a 1:Billion baby. After
              birth a CT scan confirmed that she has a 4th mass in her liver and
              is now found on her skin. Due to the pressure in her abdomen from
              these tumors, she is not able to hold food down. She is now on a
              feeding tube that feeds her very slowly in hopes that she will
              hold down as much as possible. Every ounce held down is a victory.
              She is scheduled for a biopsy on Tuesday, 1/3/2017 and we will
              hopefully have an answer as to what stage this is in. We are very
              fortunate that the tumors were found in the womb. We have a great
              team of doctors on Alyssas’ side.”
            </span>
          </p>
          <p className={'mb-[11px]'}>
            More information on Alyssa:{' '}
            <Link
              href="https://www.facebook.com/Team-Alyssa-Renee-135024543661078/"
              target="_blank"
              className="text-primary underline"
            >
              Team Alyssa Renee
            </Link>
          </p>
          <p className={'mb-[11px]'}>
            Please let Alyssa’s family know she is in your thoughts and prayers
            by clicking the heart below (equals a hug), Comment or Share.
          </p>
        </div>
        <div className={'pt-12'}>
          <CommentSection id={id} />
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default AlyssaRecipient
