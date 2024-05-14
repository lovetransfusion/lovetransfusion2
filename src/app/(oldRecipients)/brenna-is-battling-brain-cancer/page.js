import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import brenna from './images/Brenna2.webp'
import dynamic from 'next/dynamic'
const CommentSection = dynamic(() => import('../CommentSection'), {
  ssr: false,
})

export const metadata = {
  title: 'Brenna is Battling Brain Cancer',
  // description: 'Generated by create next app',
}

const BrennaRecipient = () => {
  const id = '2e93c888-59e1-405c-979b-0dac66d42e7a'
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent className="md:py-[42px]">
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'py-2 max-sm:text-center text-[30px] max-sm:mx-auto font-semibold leading-[40px] md:leading-[50px]'
            }
          >
            Brenna is Battling Brain Cancer
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Brenna is Battling DIPG (Brain Cancer)
            </p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'flex flex-col md:flex-row gap-[24px] pb-[50px]'}>
          <div className={'group relative w-fit p-[6px] mt-[-6px] ml-[-6px] shadow-sm'}>
            <Link href={'/recipients/brenna'} className="relative">
              <Image
                src={brenna}
                placeholder="blur"
                alt="profile picture of brenna"
                className="min-w-full lg:min-w-[300px] h-auto"
              />
            </Link>
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <div className={'flex flex-col gap-[11px]'}>
            <p className={''}>
              Brenna is a 4 year old battling DIPG (a rare and aggressive form
              of childhood brain cancer).
            </p>
            <p className={''}>
              From Brenna’s Page:{' '}
              <span className="italic">
                “Brenna, age 4, was recently diagnosed with an inoperable and
                untreatable DIPG tumor on her brainstem. The tumor has very
                quickly impacted her speech, fine and gross motor skills. She is
                no longer able to attend school and will begin radiation to
                hopefully shrink the tumor. Her parents have cared for her since
                she was born addicted to drugs. They adopted her officially in
                April, 2021.”
              </span>
            </p>
            <p className={''}>
              More info:<br></br>–{' '}
              <Link
                href="https://www.communitybetterment.org/brenna-corcoran.html"
                target="_blank"
                className="text-primary underline"
              >
                Brenna’s Fundraiser
              </Link>
            </p>
            <p className={''}>
              Please let Brenna and her family know she is in your thoughts and
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

export default BrennaRecipient
