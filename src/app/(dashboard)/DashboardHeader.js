/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { logout } from '../(auth)/signOut/actions'
import Icon_menu from '../components/icons/Icon_menu'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'

const DashboardHeader = ({ currentUser }) => {
  const display_name = currentUser?.user_metadata?.full_name
  const avatar = currentUser?.user_metadata?.avatar_url

  const { user, setUser, isMobileMenuOpen, setIsMobileMenuOpen } =
    useStore(utilityStore)

  useEffect(() => {
    console.log('currentUser', currentUser)
    if (currentUser) {
      console.log('setting user')
      setUser(currentUser)
    }
  }, [currentUser])

  console.log('user', user)

  const handleMenuClick = () => {
    setIsMobileMenuOpen()
  }

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div
      className={
        'w-full bg-primary text-white lg:text-[unset] lg:bg-white shadow-sm fixed top-0 left-0 md:static'
      }
    >
      <div className={'px-5 py-2 flex items-center'}>
        {!isMobileMenuOpen && (
          <Icon_menu
            className="size-8 select-none lg:hidden"
            onClick={handleMenuClick}
          />
        )}
        <div className={'flex gap-2 items-center w-fit relative group ml-auto'}>
          <p className={''}>{display_name}</p>
          <Image
            src={avatar}
            width={50}
            height={50}
            quality={100}
            alt="user image"
            className="rounded-full border-[1px] border-[#ccc]"
          />
          <div
            className={
              'group-hover:block hidden absolute bottom-[-61px] pt-[15px]  right-0 w-[200px] rounded-sm  shadow-sm before:absolute before:top-[7px] before:right-4 before:w-4 before:h-4 before:bg-white before:border-[#ccc] before:border-t-[1px] before:border-l-[1px] before:z-0 before:rotate-45 '
            }
          >
            <div className={'bg-white border-[1px] border-[#ccc]'}>
              <p
                className={'py-3 px-5 cursor-pointer text-[#000]'}
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
