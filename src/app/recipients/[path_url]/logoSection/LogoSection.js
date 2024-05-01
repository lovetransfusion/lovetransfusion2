import Image from 'next/image'
import React from 'react'
import logo from '../images/lt-logo-white.png'
import Link from 'next/link'

const LogoSection = () => {
  return (
    <div className={'flex bg-primary py-5 '}>
      <div
        className={
          'container flex flex-col justify-between gap-[15px] md:gap-[23px] md:px-6 md:flex-row lg:px-10 xl:px-0 '
        }
      >
        <Link href={process.env.NEXT_PUBLIC_ROOT_DOMAIN}>
          <Image
            src={logo}
            priority
            alt="white-logo"
            width={396}
            height={60}
            className="w-[321px] h-[48px] md:w-[280px] md:h-[42px] lg:w-[396px] lg:h-[60px]"
          />
        </Link>
        <div
          className={
            'flex text-white flex-col gap-[3px] justify-center pt-[3px] md:text-right'
          }
        >
          <p className={'text-[14.3px] leading-[17px]'}>
            Love Transfusion Inc - A 501(c)(3) Nonprofit Organization
          </p>
          <p className={'text-[18.5px] leading-[22px] font-mediumCond'}>
            Connecting People Who Hurt With Those Who Care
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogoSection
