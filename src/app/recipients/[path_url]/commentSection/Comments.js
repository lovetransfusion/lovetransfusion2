import { convertToZeroFirst } from '@/utilities/date-and-time/convertToZero'
import { getAmPm } from '@/utilities/date-and-time/getAmPm'
import Image from 'next/image'
import React from 'react'
import commentatorImage from '../images/avatar.svg'

const convertDate = (date) => {
  const initialDay = date.getDate()
  const day = convertToZeroFirst(initialDay)
  const initialMonth = date.getMonth() + 1
  const month = convertToZeroFirst(initialMonth)
  const year = date.getFullYear()
  const myDate = `${year}-${month}-${day}`

  const initialHour = date.getHours()
  const hour = convertToZeroFirst(initialHour)
  const initialMinutes = date.getMinutes()
  const minutes = convertToZeroFirst(initialMinutes)
  const pmOrAm = getAmPm(initialHour)
  const time = `${hour}:${minutes} ${pmOrAm}`
  const dateTime = `${myDate} at ${time}`
  return dateTime
}

const Comments = ({ listOfComments }) => {
  return (
    <>
      <div className={'flex flex-col gap-3 md:gap-5 xl:pb-[65px]'}>
        {listOfComments?.map((comment, index) => {
          const date = new Date(comment.date)
          const dateTime = convertDate(date)
          return (
            <div
              key={index}
              className={
                'flex bg-white rounded-md pt-[22px] pb-5 pr-[13px] pl-[15px] gap-3 md:gap-5 shadow-sm items-start'
              }
            >
              <div className={'flex size-[45px] mt-1'}>
                <Image
                  src={commentatorImage}
                  width={45}
                  height={45}
                  alt="commentator-profile-picture"
                  className="min-w-[45px] min-h-[45px]"
                />
              </div>
              <div className={'flex flex-col gap-[2px]'}>
                <div
                  className={
                    'flex items-start md:items-center gap-0 md:gap-[6px] flex-col md:flex-row'
                  }
                >
                  <p
                    className={
                      'font-mediumCond text-primary text-xl leading-[22px]'
                    }
                  >
                    {comment.name}
                  </p>
                  <p className={'text-primary'}>{dateTime}</p>
                </div>
                <p className={'text-[18px] leading-5'}>{comment.comment}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Comments
