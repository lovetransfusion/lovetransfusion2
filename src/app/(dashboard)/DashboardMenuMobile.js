'use client'
import Image from 'next/image'
import logo from '@/app/images/lt-logo-white.png'
import Icon_dashboard from '../components/icons/Icon_dashboard'
import Icon_card from '../components/icons/Icon_card'
import Icon_user from '../components/icons/Icon_user'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import Icon_close from '../components/icons/Icon_close'
import Link from 'next/link'
import { dashboardMenu } from './dashboardMenu'

const DashboardMenuMobile = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore(utilityStore)

  const handleCLose = () => {
    setIsMobileMenuOpen()
  }
  return (
    <>
      <div
        className={`bg-primary fixed h-screen text-white py-10 z-10 overflow-hidden shadow-md ${
          isMobileMenuOpen ? 'w-[300px] px-5' : 'w-0'
        } transition-all duration-500`}
      >
        {isMobileMenuOpen && (
          <Icon_close
            className="absolute top-3 right-3 select-none"
            onClick={handleCLose}
          />
        )}
        <div className={'h-fit mb-5 lg:mb-10'}>
          <Image
            src={logo}
            alt="Love Transfusion logo"
            className="max-w-[220px] lg:max-w-[260px]"
          />
        </div>
        <div className={'flex flex-col divide-y divide-primary-400'}>
          {dashboardMenu.map((menu, index) => {
            const { name, link, Icon } = menu
            return (
              <Link href={link} key={index}>
                <div className={'flex items-center gap-4 py-4'}>
                  <Icon className={'text-white size-7'} />
                  <p className={''}>{name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DashboardMenuMobile
