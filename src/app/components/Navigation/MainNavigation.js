'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import whiteLogo from '@/app/images/lt-logo-white.png'
import Icon_menu from '../icons/Icon_menu'
import Icon_close from '../icons/Icon_close'
import Icon_plus from '../icons/Icon_plus'
import {
  AnimatePresence,
  LazyMotion,
  easeInOut,
  easeOut,
  m,
} from 'framer-motion'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const MainNavigation = () => {
  const [activeMainIem, setactiveMainIem] = useState('')
  const [activeSubItem, setactiveSubItem] = useState('')
  const [mobileIsOpen, setmobileIsOpen] = useState(false)

  const nav = [
    { path: '/home', name: 'Home' },
    {
      path: '/about',
      name: 'About',
      array: [
        {
          main: 'about',
          path: '/mission',
          name: 'Mission',
        },
        {
          main: 'main',
          path: '/message-from-the-founder',
          name: 'Message from the Founder',
        },
        {
          main: 'main',
          path: '/what-is-love-transfusion',
          name: 'What is Love Transfusion?',
          array: [
            { main: 'main', path: '/connections', name: 'Connections' },
            { main: 'main', path: '/resources', name: 'Resources' },
            { main: 'main', path: '/care-ackages', name: 'Care Packages' },
            { main: 'main', path: '/follow-up', name: 'Follow Up' },
          ],
        },
      ],
    },
    { path: '/testimonials', name: 'Testimonials' },
    { path: '/visit', name: 'Visit' },
    {
      path: '/contact',
      name: 'Contact',
      array: [{ main: 'main', path: '/submit-story', name: 'Submit Story' }],
    },
    { path: '/donate', name: 'Donate' },
  ]

  const handleMainMenu = (path) => {
    if (path === activeMainIem) {
      setactiveMainIem('')
      return
    }
    setactiveMainIem(path)
  }
  const handleSubMenu = (path) => {
    if (path === activeSubItem) {
      setactiveSubItem('')
      return
    }
    setactiveSubItem(path)
  }
  console.log({ activeMainIem, activeSubItem })

  const handleStatus = () => {
    setmobileIsOpen(() => !mobileIsOpen)
  }

  const animateDropdown = {
    inactive: {
      height: '0',
      marginTop: 0,
      transition: {
        duration: 0.3,
      },
    },
    active: {
      height: 'auto',
      marginTop: '11px',
      transition: {
        duration: 0.3,
      },
    },
  }
  const animateSlideIn = {
    inactive: {
      x: '-80vw',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    active: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <>
      <LazyMotion features={loadFeatures}>
        <div
          className={'flex py-5 shadow-sm bg-primary text-white select-none'}
        >
          <div
            className={
              'flex justify-start xl:justify-between items-center gap-2 md:gap-4 xl:gap-[unset] max-w-[1150px] w-full mx-auto xl:flex-row px-3 md:px-6 xl:px-0'
            }
          >
            <div className={'flex xl:hidden'}>
              <Icon_menu
                onClick={handleStatus}
                className="size-7 md:size-10 cursor-pointer"
              />
              <AnimatePresence>
                {mobileIsOpen && (
                  <div
                    className={
                      'w-full fixed top-0 left-0 z-50 h-full backdrop-blur-sm bg-neutral-400 bg-opacity-20'
                    }
                  >
                    <m.div
                      variants={animateSlideIn}
                      initial="inactive"
                      animate="active"
                      exit="inactive"
                      className={
                        'block xl:hidden px-[30px] pt-[15px] bg-white z-50 w-[80vw] md:w-[40vw] min-h-full text-[#262b2e] shadow-md'
                      }
                    >
                      <div
                        onClick={handleStatus}
                        className={
                          'p-[2px] bg-primary w-fit ml-auto mr-[-15px] cursor-pointer'
                        }
                      >
                        <Icon_close className="text-white" />
                      </div>
                      <div
                        className={'flex flex-col divide-y divide-[#e5e5e5]'}
                      >
                        {nav.map((item, index) => {
                          const { name, path } = item
                          return (
                            <div
                              key={index}
                              className="flex-col font-semibold py-[13px]"
                            >
                              <div
                                onClick={() => handleMainMenu(item.path)}
                                className={
                                  'flex w-full items-center justify-between'
                                }
                              >
                                {name}
                                {item?.array && (
                                  <Icon_plus className="text-[#dfdfdf]" />
                                )}
                              </div>
                              <AnimatePresence>
                                {item?.array && activeMainIem === item.path && (
                                  <m.div
                                    variants={animateDropdown}
                                    initial="inactive"
                                    animate="active"
                                    exit={'inactive'}
                                    className={'overflow-y-hidden text-[13px] '}
                                  >
                                    {item?.array?.map((subItem, index) => {
                                      return (
                                        <div key={index}>
                                          <div
                                            onClick={() =>
                                              handleSubMenu(subItem.path)
                                            }
                                            className={
                                              'flex justify-between items-center'
                                            }
                                          >
                                            <p className={'py-1 pl-5'}>
                                              {subItem.name}
                                            </p>
                                            {subItem?.array && (
                                              <Icon_plus className="text-[#dfdfdf]" />
                                            )}
                                          </div>
                                          <AnimatePresence>
                                            {subItem?.array &&
                                              activeSubItem ===
                                                subItem.path && (
                                                <m.div
                                                  variants={animateDropdown}
                                                  initial="inactive"
                                                  animate="active"
                                                  exit={'inactive'}
                                                  className={
                                                    'text-[13px] overflow-y-hidden'
                                                  }
                                                >
                                                  {subItem?.array?.map(
                                                    (subItem3, index) => {
                                                      return (
                                                        <p
                                                          key={index}
                                                          className={
                                                            'py-1 pl-10'
                                                          }
                                                        >
                                                          {subItem3?.name}
                                                        </p>
                                                      )
                                                    }
                                                  )}
                                                </m.div>
                                              )}
                                          </AnimatePresence>
                                        </div>
                                      )
                                    })}
                                  </m.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </m.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
            <Image
              src={whiteLogo}
              width={396}
              height={60}
              quality={100}
              className="max-w-[280px] md:max-w-[unset]"
              alt="Love Transfusion logo"
            />
            <div
              className={'hidden xl:flex gap-10 flex-wrap gap-y-3 items-center'}
            >
              {nav.map((item, index) => {
                const { name, path } = item
                return (
                  <div key={index} className="font-semibold">
                    {name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </LazyMotion>
    </>
  )
}

export default MainNavigation