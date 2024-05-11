import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import React from 'react'
import sick from './images/sick.webp'
import Image from 'next/image'
import Link from 'next/link'
import miette from '@/app/recipients/[path_url]/testimonials/images/Miette.jpg'
import dace from '@/app/(about)/mission/images/Dace-60x60.webp'
import braiden from '@/app/(about)/mission/images/Braiden-60x60.webp'
import chris from '@/app/(about)/mission/images/Chris-60x60.webp'
import kosher from '@/app/(about)/mission/images/Kosher-60x60.webp'
import ethan from '@/app/components/ThisWebsiteOnly/Sidebar/images/Ethan-60x60.webp'

const AboutPage = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'max-sm:leading-[38px] max-sm:text-center text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            About Love Transfusion
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>About</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div>
          <Image
            src={sick}
            alt="Sick"
            placeholder="blur"
            quality={100}
            priority
            className="md:float-left md:mr-[30px] md:mb-[10px] max-sm:mb-6 md:w-[150px] h-auto"
          />
          <p className={''}>
            Love Transfusion is a messaging and resource service designed to
            help individuals in need. The sad fact is that every day people all
            around us are waging their own private war with fear, pain and
            loneliness. The list includes but is certainly not limited to
            shut-ins, disabled, elderly, military personnel and those who have
            lost loved ones. Millions more are fighting devastating physical or
            mental illness.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion, Inc. was founded by a group of people who have
            experienced some of life’s darkest moment’s first-hand… and want to
            help others in their time of need.
          </p>
          <p className={'mt-[10px]'}>What makes Love Transfusion unique?</p>
          <p className={'mt-[10px]'}>
            Although there are a few sites designed to keep friends and loved
            ones informed of an individual’s medical situation, none effectively
            provide a means of communicating love and support back to the person
            or family in need. Studies have shown that patients who feel love
            and support heal more quickly. The same can be said for individuals
            facing virtually any difficult situation.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion is about people helping people. We believe the most
            important things in life are relationships. If we can facilitate
            those relationships, serve as a conduit between those in need and
            those who care… together we can help each other through even the
            most difficult times.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion is private – We give users full control over the
            amount of information they share… and with whom they share it.
            Recipients can manage details of their situation with privacy
            settings, thereby allowing those closest to them greater access, yet
            still provide some limited information for even complete strangers
            who wish to express support.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion is free – There is no cost to use the service. A
            website can be set-up for you or a loved one in a matter of minutes.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion is easy – Anyone with an Internet connection can
            use it.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion recommends quality resources – We have trained
            professionals on staff who research and recommend the best resources
            for each individual’s specific needs.
          </p>
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default AboutPage
