import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import React from 'react'
import happyRecipient from './images/girl640x360.webp'
import Image from 'next/image'
import Link from 'next/link'
import miette from '@/app/(recipients)/[path_url]/testimonials/images/Miette.jpg'
import dace from '@/app/(about)/mission/images/Dace-60x60.webp'
import braiden from '@/app/(about)/mission/images/Braiden-60x60.webp'
import chris from '@/app/(about)/mission/images/Chris-60x60.webp'
import kosher from '@/app/(about)/mission/images/Kosher-60x60.webp'
import ethan from '@/app/components/ThisWebsiteOnly/Sidebar/images/Ethan-60x60.webp'

const Connections = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Connections
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Connections</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'border-b-[1px] border-[#0CA2E0] pb-9'}>
          <div
            className={
              'bg-primary-100 w-fit md:float-left md:mr-[30px] md:mb-[10px] max-sm:mb-6 h-auto'
            }
          >
            <Image
              src={happyRecipient}
              placeholder="blur"
              alt="A girl smiling"
              quality={100}
              priority
              className="md:w-[357px] h-auto"
            />
          </div>
          <p className={''}>
            At Love Transfusion, Inc. we believe in the power of human
            relationships.
          </p>
          <p className={'mt-[10px]'}>
            Our goal is to serve as a conduit and facilitating expressions of
            love and support. Something as simple as a smile, a kind word or a
            caring gesture can make even a seemingly hopeless situation seem
            more bearable. Many people want to show they care but don’t know how
            and as a result do nothing.
          </p>
          <p className={'mt-[10px]'}>
            Love Transfusion provides simple, safe and effective ways for people
            to communicate support and encouragement to those who are hurting –
            whether they be family, friend or even a complete stranger.
          </p>
          <p className={'mt-[10px]'}>
            For the first time in history, because of the Internet and mobile
            devices, we now have the ability to instantaneously connect those
            who hurt with those who care. Clinical studies have shown that
            individuals who know they are being thought of and prayed for – heal
            faster, better and stronger. When actual visits in person are not
            logistically possible for whatever reason, just the knowledge of a
            connection with someone, regardless of distance… provides a
            tremendous source of comfort.
          </p>
        </div>
        <div className={'mt-14 lg:columns-2 lg:gap-10'}>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid'}>
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
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Thank you to all of you who pray for my grandson and his family.
              thank you for the tremendous support you extended, we will be
              forever grateful to all of you.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={ethan}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Ethan – Brain Cancer</p>
                <p className={'text-[13px] font-semibold'}>
                  Marie N. - Philippines
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

export default Connections
