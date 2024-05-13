'use client'
import React, { Suspense, useState } from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '../components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '../components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import holdingHands from './images/holding-hands.webp'
import paypalButton from './images/paypal1.webp'
import ccButton from './images/cc_button-117x72.webp'
import miette from '@/app/recipients/[path_url]/testimonials/images/Miette.jpg'
import kosher from '@/app/(about)/mission/images/Kosher-60x60.webp'
import dace from '@/app/(about)/mission/images/Dace-60x60.webp'
import braiden from '@/app/(about)/mission/images/Braiden-60x60.webp'
import chris from '@/app/(about)/mission/images/Chris-60x60.webp'
import ethan from '@/app/components/ThisWebsiteOnly/Sidebar/images/Ethan-60x60.webp'
import lauren from '@/app/components/ThisWebsiteOnly/Sidebar/images/Lauren-60x60.webp'
import alex from '@/app/components/ThisWebsiteOnly/Footer/images/Alex-60x60.webp'
import elizabeth from '@/app/recipients/[path_url]/testimonials/images/Elizabeth.png'
import jacob from './images/Jacob-60x60.webp'
import Divider from '../components/Divider'
import Popup from '../components/Popup'
import dynamic from 'next/dynamic'
import LoadingComponent from '../components/LoadingComponent'
import Toast from '../components/Toast'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import TriggerPaymentReceipt from './TriggerPaymentReceipt'
const DonatePopup = dynamic(() => import('./DonatePopup'), {
  loading: () => <LoadingComponent className={'min-h-screen'} />,
  ssr: false,
})
const PaymentReceipt = dynamic(
  () => import('./PaymentReceipt/PaymentReceipt'),
  {
    loading: () => <LoadingComponent className={'min-h-screen'} />,
    ssr: false,
  }
)

const ClientDonatePage = () => {
  const { toast, settoast } = useStore(utilityStore)
  const [popup, setpopup] = useState(null)
  const handleCCButtonClick = () => {
    setpopup('donatePopup')
  }
  return (
    <div className={`${openSans.className}`}>
      <Toast parameters={{ toast, settoast }} />

      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] leading-[40px] max-sm:py-[6px] text-center mx-auto md:text-[34px] font-semibold md:leading-[50px]'
            }
          >
            Help Love Transfusion Help Others
          </h1>
        </div>
      </TitleSectionComponent>

      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'flex flex-col md:flex-row gap-[30px]'}>
          <Image
            src={holdingHands}
            alt="holding hands"
            placeholder="blur"
            quality={100}
            priority
          />
          <div className={'flex flex-col gap-[10px]'}>
            <p className={''}>
              Every dollar you donate helps Love Transfusion serve as a conduit
              of love and support.
            </p>
            <p className={''}>
              We could not provide the services we offer without the assistance
              of people like you. Please consider partnering with us by making a{' '}
              <span className="font-semibold">tax-deductible donation</span> of
              any amount.
            </p>
            <p className={''}>
              Love Transfusion, Inc. is a 501(c)(3) nonprofit organization.{' '}
              <br></br>
              <span className="font-semibold">Tax ID #27-2829895</span>
            </p>
          </div>
        </div>

        <div className={'grid grid-cols-1 md:grid-cols-3 mt-[57px] gap-y-8'}>
          <div className={'text-center'}>
            <p className={'font-semibold mb-[10px]'}>Donate with PayPal:</p>
            <Link
              href={
                'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EVE8X5T3YF4GE'
              }
              target="_blank"
            >
              <Image
                src={paypalButton}
                alt="PayPal button"
                quality={100}
                className="w-[151px] h-auto mx-auto"
              />
            </Link>
          </div>
          <div className={'text-center'}>
            <p className={'font-semibold mb-[10px]'}>
              Donate with Credit or Debit Card
            </p>
            <Image
              onClick={handleCCButtonClick}
              src={ccButton}
              alt="Credit card button"
              quality={100}
              className="w-[117px] h-auto mx-auto cursor-pointer"
            />
          </div>
          <div className={'text-center'}>
            <p className={'font-semibold mb-[10px]'}>Donate by Check:</p>
            <p className={''}>
              Love Transfusion, Inc.<br></br>
              1201 N Orange St, Suite 799<br></br>
              Wilmington, DE 19801
            </p>
          </div>
        </div>

        <p
          className={
            'text-[#808080] text-[22px] font-semibold text-center mb-[49px] mt-[71px]'
          }
        >
          Thank You!
        </p>

        <Divider className="border-b-[1px] border-primary">
          <p
            className={
              'px-4 text-primary text-[22px] text-center leading-[30px] font-semibold'
            }
          >
            Some Testimonials from Our Recipients
          </p>
        </Divider>
        {/*********** Testimonies **********/}
        <div className={'mt-5 lg:columns-2 lg:gap-10'}>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid'}>
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
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid  mt-10'}>
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
            <p className={''}>
              “Love Transfusion is a fantastic idea, and gives people hope and
              to let people know that there are people who care. I am truly
              amazing by all of the support. Your page gave me hope knowing
              there are people around the world that care. Thank you for such a
              wonderful peace of mind and support. Knowing I’m not alone.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={lauren}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Lauren – Leukemia</p>
                <p className={'text-[13px] font-semibold'}>
                  Lauren J. - Australia
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Thank you Love Transfusion. You gave me the little hope I needed
              when I was starting to lose it. Thank you.”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={jacob}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Jacob – Liver Cancer</p>
                <p className={'text-[13px] font-semibold'}>
                  Natasha G. - El Paso, Texas
                </p>
              </div>
            </div>
          </div>
          <div className={'bg-[#F6F6F6] p-[25px] lg:break-inside-avoid mt-10'}>
            <p className={''}>
              “Elizabeth was so excited to see all the well wishes and prayers
              sent from so many people. It was absolutely amazing! Thank you for
              being so sweet and considerate!”
            </p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={elizabeth}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>
                  Elizabeth – Brain Tumor
                </p>
                <p className={'text-[13px] font-semibold'}>
                  Lisa M. - Decatur, AR
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
            <p className={''}>“Thank you for the awesome support!”</p>
            <div className={'flex items-center gap-4 mt-5'}>
              <Image
                src={alex}
                quality={100}
                className="rounded-full size-[60px]"
                alt="receipient's profile picture"
              />
              <div className={''}>
                <p className={'text-sm font-semibold'}>Alex – Bone Cancer</p>
                <p className={'text-[13px] font-semibold'}>
                  Alex R. - Orlando, Florida
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
        </div>
      </ContentContainerWithSidebar>
      {popup === 'donatePopup' && (
        <Popup
          data={{
            setpopup,
            bgNotClickable: true,
            modalContainer: 'max-w-[568px]',
          }}
        >
          <DonatePopup />
        </Popup>
      )}
      {popup === 'donationReceipt' && (
        <Popup
          data={{
            setpopup,
            modalContainer: 'max-w-[568px]',
          }}
        >
          <PaymentReceipt />
        </Popup>
      )}
      <Suspense fallback={<></>}>
        <TriggerPaymentReceipt setpopup={setpopup} />
      </Suspense>
    </div>
  )
}

export default ClientDonatePage
