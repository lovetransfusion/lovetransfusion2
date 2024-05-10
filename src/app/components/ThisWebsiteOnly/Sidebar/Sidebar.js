import React from 'react'
import Input from '../../inputsFields/InputGroup/Input'
import InputGroup from '../../inputsFields/InputGroup/InputGroup'
import Icon_search from '../../icons/Icon_search'
import Image from 'next/image'
import donate from './images/LT_donate1.webp'
import SidebarTestimonials from './SidebarTestimonials'
import { Arial } from '@/utilities/fonts/fonts'
import RecentRecipients from './RecentRecipients'
import Link from 'next/link'

const Sidebar = async () => {
  return (
    <div
      className={`${Arial.className} lg:min-w-[262px] lg:max-w-[262px] lg:pl-[50px]`}
    >
      <InputGroup className={'mt-1'}>
        <Input
          placeholder="Type and hit enter ..."
          className="group-has-[svg]/input:pl-4 group-has-[svg]/input:pr-8 rounded-none border-[#E4E5E7] py-[7px] placeholder:text-[#CDCFD1] placeholder:text-sm focus:placeholder:text-[#F1F1F2]"
        />
        <div className={'absolute right-3 my-auto top-0 bottom-0 h-fit'}>
          <Icon_search className="size-[18px] text-[#898D94]" />
        </div>
      </InputGroup>
      <div
        className={
          'flex justify-center lg:justify-start mt-11 pt-11 pb-[52px] border-t-[1px] border-b-[1px] border-[#E5E5E5]'
        }
      >
        <Link href={'/donate'}>
          <Image src={donate} alt="Donate button" quality={100} />
        </Link>
      </div>
      <div className={'py-[42px] pb-[42px] border-b-[1px] border-[#E5E5E5]'}>
        <p className={'mb-[13px] text-base'}>Testimonials</p>
        <SidebarTestimonials />
      </div>
      <div className={'pt-[42px]'}>
        <p className={'mb-[13px] text-base'}>Recent Recipients</p>
        <RecentRecipients />
      </div>
    </div>
  )
}

export default Sidebar
