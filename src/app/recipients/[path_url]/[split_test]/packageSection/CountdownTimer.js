import { subtractDateTime } from '@/utilities/date-and-time/subtractDateTime'
import React, { useEffect, useState } from 'react'

const CountdownTimer = ({ parameters }) => {
  const [remainingTime, setremainingTime] = useState(new Date())
  const { days, hours, minutes, seconds } = remainingTime

  useEffect(() => {
    if (parameters?.end_of_campaign === undefined) return
    const interval = setInterval(() => {
      const dateNow = new Date()
      const dateEnd = new Date(parameters?.end_of_campaign)
      setremainingTime(subtractDateTime(dateNow, dateEnd))
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={'flex gap-2 md:gap-5'}>
      <div className={'flex flex-col items-center gap-[14px]'}>
        <div
          className={
            'flex bg-primary pt-[17px] pb-[15px] px-[11px] w-[69px] h-[69px] rounded-[10px] border-2 border-[#207AC5]'
          }
        >
          <p
            className={'font-mediumCond text-[44px] leading-[33px] text-white'}
          >
            {days >= 0 ? days : '00'}
          </p>
        </div>
        <p className={'text-[17px] font-demiCond'}>DAYS</p>
      </div>

      <div className={'flex flex-col items-center gap-[14px]'}>
        <div
          className={
            'flex bg-primary pt-[17px] pb-[15px] px-[11px] w-[69px] h-[69px] rounded-[10px] border-2 border-[#207AC5]'
          }
        >
          <p
            className={'font-mediumCond text-[44px] leading-[33px] text-white'}
          >
            {days >= 0 ? hours : '00'}
          </p>
        </div>
        <p className={'text-[17px] font-demiCond'}>HOURS</p>
      </div>

      <div className={'flex flex-col items-center gap-[14px]'}>
        <div
          className={
            'flex bg-primary pt-[17px] pb-[15px] px-[11px] w-[69px] h-[69px] rounded-[10px] border-2 border-[#207AC5]'
          }
        >
          <p
            className={'font-mediumCond text-[44px] leading-[33px] text-white'}
          >
            {days >= 0 ? minutes : '00'}
          </p>
        </div>
        <p className={'text-[17px] font-demiCond'}>MINUTES</p>
      </div>

      <div className={'flex flex-col items-center gap-[14px]'}>
        <div
          className={
            'flex bg-primary pt-[17px] pb-[15px] px-[11px] w-[69px] h-[69px] rounded-[10px] border-2 border-[#207AC5]'
          }
        >
          <p
            className={'font-mediumCond text-[44px] leading-[33px] text-white'}
          >
            {days >= 0 ? seconds : '00'}
          </p>
        </div>
        <p className={'text-[17px] font-demiCond'}>SECONDS</p>
      </div>
    </div>
  )
}

export default CountdownTimer
