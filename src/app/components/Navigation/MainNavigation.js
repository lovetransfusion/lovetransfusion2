import Image from 'next/image'
import React from 'react'
import mainLogo from '@/app/images/main-logo.png'
import ButtonLogin from './ButtonLogin'

const MainNavigation = () => {
  const nav = [
    { path: '/home', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/visit', name: 'Visit' },
    { path: '/contact', name: 'Contact' },
    { path: '/donate', name: 'Donate' },
  ]
  console.log('nav', nav)
  return (
    <div className={'flex py-[15px] shadow-sm '}>
      <div
        className={
          'flex-col lg:flex-row container md:px-6 lg:px-10 xl:px-0 flex justify-between items-center'
        }
      >
        <Image
          src={mainLogo}
          width={355}
          height={70}
          quality={100}
          alt="Love Transfusion logo"
        />
        <div className={'flex gap-8 flex-wrap gap-y-3 items-center'}>
          {nav.map((item, index) => {
            const { name, path } = item
            return (
              <div key={index} className={'font-mediumCond text-xl'}>
                {name}
              </div>
            )
          })}
          <ButtonLogin />
        </div>
      </div>
    </div>
  )
}

export default MainNavigation
