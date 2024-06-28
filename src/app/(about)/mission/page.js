import React from 'react'
import TitleSectionComponent from '../../components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import Image from 'next/image'
import girl from './images/5b-300x169.webp'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import braiden from './images/Braiden-60x60.webp'
import dace from './images/Dace-60x60.webp'
import alex from '@/app/components/ThisWebsiteOnly/Footer/images/Alex-60x60.webp'
import miette from '@/app/(recipients)/[path_url]/testimonials/images/Miette.jpg'
import chris from './images/Chris-60x60.webp'
import kosher from './images/Kosher-60x60.webp'
import IconList1 from './IconList1'
import IconList2 from './IconList2'
import Link from 'next/link'

const MissionPage = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Our Mission
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Mission</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'flex flex-col lg:flex-row gap-[30px]'}>
          <Image
            src={girl}
            placeholder="blur"
            quality={100}
            priority
            alt="girl laying in bed while typing"
            className="w-full md:min-w-[235px] h-auto"
          />
          <p className={''}>
            Our mission is based on one simple fact:{' '}
            <span className="font-bold">Love works</span>. People who hurt find
            great solace when they know that family, friends and even complete
            strangers care for them. Love Transfusion serves as a conduit and
            facilitates expressions of love and support through the services we
            offer.
          </p>
        </div>
        <p className={'mt-5'}>Examples of Recipients include:</p>
        <div className={'grid grid-cols-2 gap-[100px] mt-[11px] '}>
          <IconList1 />
          <IconList2 />
        </div>
        <div className={'mt-14 lg:columns-2 lg:gap-10'}>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid'}>
            <p className={''}>
              “I’d just like to say a very, very big thank you to you for doing
              a post about my nephew. My sister and myself have sat down and
              read each and every one of the messages of hope that have been
              posted and we have both been in tears at the amount of love and
              good wishes coming his way because of this post. I am very proud
              to be part of the Love Transfusion community and thank you so, so
              much from the bottom of my heart.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={braiden}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>
                  Braiden – Neuroblastoma
                </p>
                <p className={'text-[13px] font-semibold'}>
                  Sharon W.- Manchester, UK
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Thank you all so very very much for the sweet comments and
              prayers. I love the love that you all have for my sweet son!”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={dace}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Dace – Leukemia</p>
                <p className={'text-[13px] font-semibold'}>
                  Melissa D. - Las Vegas, NV
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>“Thank you for the awesome support!”</p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={alex}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>
                  Braiden – Neuroblastoma
                </p>
                <p className={'text-[13px] font-semibold'}>
                  Sharon W.- Manchester, UK
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “My son Chris was facing relapse of his hodgkin’s lymphoma. At 14
              he was scared and worried. Some one said I should write to Love
              Transfusion for help getting the support he needed while waiting.
              And over the weekend before his surgery the outpouring of support
              and prayers was almost overwhelming. And it also helped us connect
              with others that have faced what we were facing! We cannot express
              our thanks and gratitude enough for Love Transfusions! And can’t
              wait to see what’s to come! Thank you from our family and the
              entire Chris’s Crew!”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={chris}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Chris – Lymphoma</p>
                <p className={'text-[13px] font-semibold'}>Michelle - NC</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Your support was so uplifting for us and it really helped lift
              our spirits through a very (at the time) soul-destroying moment in
              our lives.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={kosher}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>
                  Kosher – Neuroblastoma
                </p>
                <p className={'text-[13px] font-semibold'}>
                  Raewyn C. - Auckland, NZ
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Oh wow, you guys have made our night, week, month… my daughter is
              so excited. She is absolutely over the moon! Thank you for your
              love and prayers and well wishes. Thank you so very much Love
              Transfusion.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={miette}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Miette – Brain Cancer</p>
                <p className={'text-[13px] font-semibold'}>
                  Natalie S. - Australia
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          className={
            'font-bold text-primary underline text-center mt-[30px] mb-[35px]'
          }
        >
          <Link href={'/testimonials'}>Read more testimonials…</Link>
        </p>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default MissionPage
