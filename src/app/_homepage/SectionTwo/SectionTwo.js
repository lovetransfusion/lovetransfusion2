import Image from 'next/image'
import React from 'react'
// import homedemo from './images/homedemo2.png'
import homedemo from './images/homedemo2.webp'
import Icon_right from '@/app/components/icons/Icon_right'
import Icon_laptop from '@/app/components/icons/Icon_laptop'
import Icon_like from '@/app/components/icons/Icon_like'
import Icon_gift from '@/app/components/icons/Icon_gift'
import Icon_cog from '@/app/components/icons/Icon_cog'
import Link from 'next/link'

const SectionTwo = () => {
  return (
    <div className={'pt-[65px] pb-10'}>
      <div className="max-w-[1149px] mx-auto px-3 md:px-6 lg:px-10 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        <div className="flex md:mx-auto lg:mx-[unset]">
          <Image
            src={homedemo}
            alt="demonstration"
            // width={545}
            // height={288}
            priority
            quality={100}
            className="mt-[10px] w-full md:w-[545px] h-auto md:h-[288px]"
          />
        </div>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-[46px] pt-[19px] md:p-0'
          }
        >
          <div className={'flex text-[15px] gap-[7px]'}>
            <div className={'p-[6px] bg-primary w-fit h-fit'}>
              <Icon_laptop className="size-[14px] text-white" />
            </div>
            <div className={''}>
              <p className="font-semibold mt-[1px]">CONNECTIONS</p>
              <p className="mt-[10px] leading-[24.5px]">
                Connecting people who hurt with those who care.
              </p>
              <Link href="/connections">
                <p
                  className={
                    'flex items-center gap-1 text-primary cursor-pointer mt-[10px] underline'
                  }
                >
                  View Details <Icon_right className="size-4 " />
                </p>
              </Link>
            </div>
          </div>
          <div className={'flex text-[15px] gap-[7px]'}>
            <div className={'p-[6px] bg-primary w-fit h-fit'}>
              <Icon_like className="size-[14px] text-white" />
            </div>
            <div className={''}>
              <p className="font-semibold mt-[1px]">SOCIAL NETWORKS</p>
              <p className="mt-[10px] leading-[24.5px]">
                Providing social support through our community of 100,000+
                members.
              </p>
              <Link
                href={'https://www.facebook.com/LoveTransfusion/'}
                target="_blank"
              >
                <p
                  className={
                    'flex items-center gap-1 text-primary cursor-pointer mt-[10px] underline'
                  }
                >
                  View Details <Icon_right className="size-4 " />
                </p>
              </Link>
            </div>
          </div>
          <div className={'flex text-[15px] gap-[7px]'}>
            <div className={'p-[6px] bg-primary w-fit h-fit'}>
              <Icon_gift className="size-[14px] text-white" />
            </div>
            <div className={''}>
              <p className="font-semibold mt-[1px]">CARE PACKAGES</p>
              <p className="mt-[10px] leading-[24.5px]">
                Sending care packages customized for the individual and filled
                with love.
              </p>
              <Link href={'/care-packages'}>
                <p
                  className={
                    'flex items-center gap-1 text-primary cursor-pointer mt-[10px] underline'
                  }
                >
                  View Details <Icon_right className="size-4 " />
                </p>
              </Link>
            </div>
          </div>
          <div className={'flex text-[15px] gap-[7px]'}>
            <div className={'p-[6px] bg-primary w-fit h-fit'}>
              <Icon_cog className="size-[14px] text-white" />
            </div>
            <div className={''}>
              <p className="font-semibold mt-[1px]">FOLLOW-UP</p>
              <p className="mt-[10px] leading-[24.5px]">
                Connecting Recipients with local support groups.
              </p>
              <Link href={'/follow-up'}>
                <p
                  className={
                    'flex items-center gap-1 text-primary cursor-pointer mt-[10px] underline'
                  }
                >
                  View Details <Icon_right className="size-4 " />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
