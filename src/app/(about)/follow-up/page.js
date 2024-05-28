import React from 'react'
import TitleSectionComponent from '../../components/ThisWebsiteOnly/TitleSectionComponent'
import { openSans } from '@/utilities/fonts/fonts'
import Image from 'next/image'
import loversBonding from './images/what-to-say3.webp'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import melissa from './images/Dace-60x60.webp'
import emma from '@/app/_homepage/recentRecipients/images/Emma-225x225.webp'
import abigail from '@/app/_homepage/testimonials/images/abigail-60x60.webp'
import elizabeth from '@/app/recipients/[path_url]/testimonials/images/Elizabeth.png'
import trisha from '@/app/recipients/[path_url]/testimonials/images/Trisha-K-Preston.webp'
import aleksander from '@/app/_homepage/testimonials/images/maxim-60x60.webp'
import ladaryl from '@/app/_homepage/testimonials/images/ladaryl-60x60.webp'
import maggie from '@/app/_homepage/testimonials/images/jaime-60x60.webp'
import tl from '@/app/_homepage/testimonials/images/tl-60x60.webp'
import jen from '@/app/_homepage/testimonials/images/jessi-60x60.webp'
import Link from 'next/link'

const FolloUp = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Follow Up
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Follow Up</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'flex flex-col lg:flex-row gap-[30px]'}>
          <Image
            src={loversBonding}
            placeholder="blur"
            quality={100}
            priority
            alt="girl laying in bed while typing"
            className="md:min-w-[341px] h-auto"
          />
          <div className={''}>
            <p className={''}>
              Our ultimate goal is to connect people with local support groups
              that specialize in their specific need. Nothing beats face-to-face
              relationships especially when a local organization is equipped to
              fill a need and provide that human touch. It is estimated that
              local help is available for virtually any situation – yet most
              people never even know they exist. We work with support groups
              around the globe. If you are in need of assistance, please{' '}
              <Link href="/contact" className="text-primary underline">
                contact us
              </Link>{' '}
              and we will be glad to introduce you to an organization in your
              area.
            </p>
            <p className={'mt-[10px]'}>
              If you are a member of a local support group and wish to be added
              to our database, please contact us{' '}
              <Link href="/contact" className="text-primary underline">
                here
              </Link>
              .
            </p>
          </div>
        </div>
        <div className={'mt-[63px] lg:columns-2 lg:gap-10'}>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid'}>
            <p className={''}>
              “Thank you all so very very much for the sweet comments and
              prayers. I love the love that you all have for my sweet son!”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={melissa}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Melissa D.</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid  mt-10'}>
            <p className={''}>
              “Love transfusion has been amazing for sending us love and hope in
              our most dire need. There is no way to thank this amazing
              organization enough for what they have done for our family with
              our girls battle with fanconi anemia. Please support this amazing
              organization.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={emma}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Emma’s Mommy</p>
                <p className={'text-[13px] font-semibold'}>Prayers for Emma</p>
              </div>
            </div>
          </div>

          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Love Transfusion has been with my family through a lot of ups and
              downs. My daughters ongoing battle with cancer and my son’s 3
              wheeler accident. Feeling all the Love and Prayers coming through
              helped give us hope and lifted our spirits. I cannot say enough
              about Love Transfusion and its members.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={jen}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Jen B.</p>
                <p className={'text-[13px] font-semibold'}>Team Jessi</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Love Transfusion is Amazing! Thank you so much for support for me
              and my family… so happy got smile on face. Thank you thank you
              thank you thank you… love you all”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={abigail}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Abigail K.</p>
                <p className={'text-[13px] font-semibold'}>
                  Darlington, United Kingdom
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “We can not thank enough Love Transfusion for hosting our story.
              Thank you for being our voice and helping us reach out supporters
              all over the world.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={aleksander}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Aleksander B.</p>
                <p className={'text-[13px] font-semibold'}>
                  {"Save Maxim's Life"}
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “My son’s page on Love Transfusion has reached over 10,000 likes,
              and over 1,000 comments, and 2,000 shares! We are so happy and
              excited for him! We’ve had people from all around the world
              sending him prayers, love, and birthday wishes. I’m so happy for
              him that it brings me to tears… Thank you, Love Transfusion!”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={trisha}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Trisha K.</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “I just wanted to thank you, Love Transfusion, for all you have
              done already, and for all you continue to do every day to help
              people. My entire Heart and Soul are completely behind you in your
              fight to help those fighting. It is a wonderful thing you do, and
              it is appreciated… every day.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={tl}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>T. L. Briggs</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Thank you all so much. I showed Nicholas the post and he was so
              happy. He was smiling from ear to ear. Thank you for that.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={elizabeth}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Elizabeth B.</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “If only I could recall the day I found this page. It has taken me
              on an extremely unexpected journey. Saying, “Thanks” wouldn’t come
              close to being enough to showing my appreciation/gratitude. Much
              love to you, Love Transfusion, you give Facebook much needed
              substance, “Thanks again”“
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={ladaryl}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Ladaryl Rose</p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Thank you all so much for your prayers and your beautiful
              comments! I have tears running down my face right now after
              reading all of your words of love and support! This is a perfect
              page to share love and prayers for those in need… So beautiful!”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={maggie}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Maggie M.</p>
                <p className={'text-[13px] font-semibold'}>
                  {"That's How He Rolls"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default FolloUp
