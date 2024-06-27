import React, { useEffect, useState } from 'react'
import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import Icon_menu from '../../icons/Icon_menu'
import Icon_close from '../../icons/Icon_close'
import Link from 'next/link'
import Icon_up from '../../icons/Icon_up'
import Icon_down from '../../icons/Icon_down'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const MobileNav = ({ parameters: { nav, pathName, restricted } }) => {
  const [activeMainItem, setactiveMainItem] = useState('')
  const [activeSubItem, setactiveSubItem] = useState('')
  const [mobileIsOpen, setmobileIsOpen] = useState(false)

  useEffect(() => {
    if (!restricted) {
      setmobileIsOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])

  const handleMainMenu = (e, path) => {
    e.stopPropagation()
    if (path === activeMainItem) {
      setactiveMainItem('')
      return
    }
    setactiveMainItem(path)
  }
  const handleSubMenu = (e, path) => {
    e.stopPropagation()
    if (path === activeSubItem) {
      setactiveSubItem('')
      return
    }
    setactiveSubItem(path)
  }

  const handleStatus = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setmobileIsOpen(() => !mobileIsOpen)
  }

  const backgroundClick = (e) => {
    if (e?.target?.className?.includes('mobile-bg')) {
      setmobileIsOpen(() => !mobileIsOpen)
    }
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
        <div className={'flex xl:hidden'}>
          <Icon_menu
            onClick={handleStatus}
            className="size-7 md:size-10 cursor-pointer"
          />
          <AnimatePresence>
            {mobileIsOpen && (
              <div
                onClick={backgroundClick}
                className={
                  'mobile-bg w-full fixed top-0 left-0 z-50 h-full backdrop-blur-sm bg-neutral-400 bg-opacity-20'
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
                  <div className={'flex flex-col divide-y divide-[#e5e5e5]'}>
                    {nav.map((item, index) => {
                      const { name, path } = item
                      return (
                        <div
                          key={index}
                          className="flex-col font-semibold py-[13px]"
                        >
                          <div
                            className={
                              'flex w-full items-center justify-between'
                            }
                          >
                            {path ? (
                              <Link
                                href={path}
                                className="w-full active:text-primary "
                              >
                                {name}
                              </Link>
                            ) : (
                              { name }
                            )}
                            <div
                              className={'w-10 flex justify-end'}
                              onClick={(e) => handleMainMenu(e, path || name)}
                            >
                              {item?.array &&
                                (activeMainItem === path ||
                                activeMainItem === name ? (
                                  <Icon_up className="text-[#dfdfdf]" />
                                ) : (
                                  <Icon_down className="size-5 text-[#dfdfdf]" />
                                ))}
                            </div>
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
                                  className={'overflow-y-hidden text-[13px] '}
                                >
                                  {item?.array?.map((subItem, index) => {
                                    return (
                                      <div key={index}>
                                        <div
                                          className={
                                            'flex justify-between items-center'
                                          }
                                        >
                                          {subItem?.path ? (
                                            <Link
                                              href={subItem?.path}
                                              className="w-full"
                                            >
                                              <p
                                                className={
                                                  'active:text-primary py-1 pl-5'
                                                }
                                              >
                                                {subItem?.name}
                                              </p>
                                            </Link>
                                          ) : (
                                            <p
                                              onClick={(e) =>
                                                handleSubMenu(e, subItem?.path)
                                              }
                                              className={
                                                'active:text-primary py-1 pl-5 w-full'
                                              }
                                            >
                                              {subItem?.name}
                                            </p>
                                          )}
                                          <div
                                            className={'w-10 flex justify-end'}
                                            onClick={(e) =>
                                              handleSubMenu(e, subItem?.path)
                                            }
                                          >
                                            {subItem?.array &&
                                              (activeSubItem ===
                                                subItem?.path ||
                                              activeSubItem ===
                                                subItem?.name ? (
                                                <Icon_up className="text-[#dfdfdf]" />
                                              ) : (
                                                <Icon_down className="size-5 text-[#dfdfdf]" />
                                              ))}
                                          </div>
                                        </div>
                                        <AnimatePresence>
                                          {subItem?.array &&
                                            activeSubItem === subItem.path && (
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
                                                      <div key={index}>
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
                                                              {subItem3?.name}
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
                                                      </div>
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
      </LazyMotion>
    </>
  )
}

export default MobileNav
