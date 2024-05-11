import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import React from 'react'
import dreamstime from './images/dreamstime_s_9267497-300x200.webp'
import Image from 'next/image'
import Link from 'next/link'

const Resources = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Resources
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className='hover:underline'>Home</Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Resources</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <Image
          src={dreamstime}
          alt="A boy holding tablet with a girl watching near him"
          quality={100}
          className="md:float-left md:mr-[30px] md:mb-[10px] w-full max-sm:mb-6 md:w-[357px] h-auto"
        />
        <p className={''}>
          In this day and age, the first stop for answers when faced with an
          unfamiliar situation is typically the Internet. Although a tremendous
          repository of information, search engines are not the best place for
          people under a lot of stress to get expert advice – for the simple
          reason that search engine results are not sorted by order of
          credentials. Often times, the “expert” is nothing more than lay people
          with a search engine friendly webpage and the advice they provide may
          very well be counter-productive.
        </p>
        <p className={'mt-[10px]'}>
          LoveTransfusion.org has trained personnel on staff who pre-qualify
          resources for hundreds of scenarios such as newly diagnosed medical
          conditions, coping with the loss of a loved one, post-traumatic stress
          disorder and suicidal thoughts. Those specific resources are then
          queued up by the system and displayed in the users account.
        </p>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default Resources
