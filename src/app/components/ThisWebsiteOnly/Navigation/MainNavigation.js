'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import whiteLogo from '@/app/images/lt-logo-white.png'
import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import Icon_menu from '../../icons/Icon_menu'
import Icon_close from '../../icons/Icon_close'
import Icon_plus from '../../icons/Icon_plus'
import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { restrictedPathsNavigationMenu } from '@/utilities/restrictedPaths'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const MainNavigation = () => {
  const pathName = usePathname()

  const restricted = restrictedPathsNavigationMenu.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )

  const [activeMainItem, setactiveMainItem] = useState('')
  const [activeSubItem, setactiveSubItem] = useState('')
  const [mobileIsOpen, setmobileIsOpen] = useState(false)

  useEffect(() => {
    if (!restricted) {
      setmobileIsOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])

  if (restricted) return

  const nav = [
    { path: '/', name: 'Home' },
    {
      name: 'About',
      path: '/about',
      array: [
        {
          path: '/mission',
          name: 'Mission',
        },
        {
          path: '/how-love-transfusion-was-created',
          name: 'Message from the Founder',
        },
        {
          name: 'What is Love Transfusion?',
          array: [
            { path: '/connections', name: 'Connections' },
            { path: '/resources', name: 'Resources' },
            { path: '/care-packages', name: 'Care Packages' },
            { path: '/follow-up', name: 'Follow Up' },
          ],
        },
      ],
    },
    { path: '/testimonials', name: 'Testimonials' },
    {
      path: 'https://www.facebook.com/pg/LoveTransfusion/photos/?tab=album&album_id=222177344466773',
      name: 'Visit',
    },
    {
      name: 'Contact',
      path: '/contact',
      array: [{ path: '/submit-story', name: 'Submit Story' }],
    },
    { path: '/donate', name: 'Donate' },
  ]

  const handleMainMenu = (path) => {
    if (path === activeMainItem) {
      setactiveMainItem('')
      return
    }
    setactiveMainItem(path)
  }
  const handleSubMenu = (path) => {
    if (path === activeSubItem) {
      setactiveSubItem('')
      return
    }
    setactiveSubItem(path)
  }

  const handleStatus = (e) => {
    e.preventDefault()
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
          className={`${openSans.className} flex py-5 shadow-sm bg-primary text-white select-none`}
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
                          console.log('path', path)
                          return (
                            <div
                              key={index}
                              className="flex-col font-semibold py-[13px]"
                            >
                              <div
                                onClick={() => handleMainMenu(path || name)}
                                className={
                                  'active:text-primary flex w-full items-center justify-between'
                                }
                              >
                                {path ? (
                                  <Link href={path}>{name}</Link>
                                ) : (
                                  { name }
                                )}
                                {item?.array && (
                                  <Icon_plus className="text-[#dfdfdf]" />
                                )}
                              </div>
                              <AnimatePresence>
                                {(activeMainItem === path ||
                                  activeMainItem === name) &&
                                  item?.array && (
                                    <m.div
                                      variants={animateDropdown}
                                      initial="inactive"
                                      animate="active"
                                      exit={'inactive'}
                                      className={
                                        'overflow-y-hidden text-[13px] '
                                      }
                                    >
                                      {item?.array?.map((subItem, index) => {
                                        return (
                                          <div key={index}>
                                            <div
                                              onClick={() =>
                                                handleSubMenu(subItem?.path)
                                              }
                                              className={
                                                'flex justify-between items-center'
                                              }
                                            >
                                              <p
                                                className={
                                                  'active:text-primary py-1 pl-5'
                                                }
                                              >
                                                {subItem?.path ? (
                                                  <Link
                                                    href={subItem?.path}
                                                    className="w-full"
                                                  >
                                                    {subItem?.name}
                                                  </Link>
                                                ) : (
                                                  subItem?.name
                                                )}
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
                                                          <>
                                                            {subItem3?.path ? (
                                                              <Link
                                                                key={index}
                                                                href={
                                                                  subItem3?.path
                                                                }
                                                              >
                                                                <p
                                                                  className={
                                                                    'active:text-primary py-1 pl-10'
                                                                  }
                                                                >
                                                                  {
                                                                    subItem3?.name
                                                                  }
                                                                </p>
                                                              </Link>
                                                            ) : (
                                                              <p
                                                                className={
                                                                  'py-1 pl-10'
                                                                }
                                                              >
                                                                {subItem3?.name}
                                                              </p>
                                                            )}
                                                          </>
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
            <Link href={'/'}>
              <Image
                src={whiteLogo}
                width={396}
                height={60}
                quality={100}
                priority
                className="max-w-[280px] md:max-w-[unset]"
                alt="Love Transfusion logo"
              />
            </Link>
            <div
              className={'hidden xl:flex gap-10 flex-wrap gap-y-3 items-center'}
            >
              {nav.map((item, index) => {
                const { name, path } = item
                return (
                  <div key={index} className={'group/main relative'}>
                    <div className="font-semibold">
                      {path ? <Link href={path}>{name}</Link> : name}
                    </div>
                    <div
                      className={
                        'hidden group-hover/main:block absolute pt-[38px] left-0 w-fit z-20 text-[#262b2e] leading-[22px] text-[13px] font-semibold'
                      }
                    >
                      <div className={'bg-white shadow-md py-[13px]'}>
                        {item?.array?.map((sub, i) => {
                          return (
                            <div key={i} className={'group/sub relative'}>
                              {sub?.path ? (
                                <Link
                                  href={sub?.path || ''}
                                  className="hover:text-primary"
                                >
                                  <p
                                    className={
                                      'px-5 py-[5px] w-[210px] 2xl:w-[260px]'
                                    }
                                  >
                                    {sub.name}
                                  </p>
                                </Link>
                              ) : (
                                <p
                                  className={
                                    'px-5 py-[5px] w-[210px] 2xl:w-[260px]'
                                  }
                                >
                                  {sub.name}
                                </p>
                              )}
                              <div
                                className={
                                  'hidden group-hover/sub:block absolute top-0 right-[-210px] 2xl:right-[-260px] w-fit z-20 text-[#262b2e] leading-[22px] text-[13px] font-semibold '
                                }
                              >
                                <div className={'bg-white shadow-md py-[13px]'}>
                                  {sub?.array?.map((sub2, i) => {
                                    return (
                                      <div key={i} className={'relative'}>
                                        <Link
                                          href={sub2?.path || ''}
                                          className="hover:text-primary"
                                        >
                                          <p className="px-5 py-[5px] w-[210px] 2xl:w-[260px]">
                                            {sub2.name}
                                          </p>
                                        </Link>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
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
