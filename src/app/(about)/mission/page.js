import React from 'react'
import TitleSectionComponent from '../../components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'

const AboutPage = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <p className={'text-[40px] font-semibold leading-[50px]'}>
            Our Mission
          </p>
          <div className={'flex gap-2'}>
            <p className={'text-[13px] leading-[20px]'}>Home</p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Mission</p>
          </div>
        </div>
      </TitleSectionComponent>
    </div>
  )
}

export default AboutPage
