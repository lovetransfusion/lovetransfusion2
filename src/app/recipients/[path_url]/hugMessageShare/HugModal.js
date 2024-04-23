import React from 'react'
import { m } from 'framer-motion'
import Icon_heart from '@/app/components/icons/Icon_heart'

const HugModal = ({ parameters: { isModalActive } }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <>
      {isModalActive && (
        <m.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={
            'flex absolute pt-1 bottom-[65px] left-[-80px] md:left-[-30px] bg-white shadow-custom2 border-4 border-primary rounded-[13px] min-w-[342px] md:min-w-[352px] pb-[15px] cursor-default justify-center px-1 md:px-[6px] '
          }
        >
          <div
            className={
              'flex flex-col z-0 relative items-start pt-4 pb-1 after:absolute after:bottom-[-26px] after:bg-white after:left-[120px] md:after:left-[55px] after:right-0 after:size-[17px] after:border-r-[4px] after:border-primary after:border-b-4 afer:bg-white after:rotate-45 after:z-20'
            }
          >
            <div className={'flex items-center gap-1'}>
              <Icon_heart className={'w-5 h-5 text-primary items-center flex'} />

              <p
                className={
                  'text-xl font-mediumCond text-primary leading-[22px]'
                }
              >
                You Have Already Given a Hug Today
              </p>
            </div>
            <p className={'text-primary'}>
              Please come back tomorrow to give another
            </p>
          </div>
        </m.div>
      )}
    </>
  )
}

export default HugModal
