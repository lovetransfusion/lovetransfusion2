import Icon_left from '@/app/components/icons/Icon_left'
import utilityStore from '@/utilities/store/store'
import React from 'react'
import { useStore } from 'zustand'

const TopSection = ({ parameters: { text, number } }) => {
  const { setactiveStep } = useStore(utilityStore)
  const goTo = () => {
    setactiveStep(number)
  }
  return (
    <div
      className={
        'bg-[#FBFBFB] py-[14px] relative border-[#F2F2F2] border-b-[1px]'
      }
    >
      <div
        className={
          'flex justify-center p-[17px] items-center w-14 h-full absolute top-0 bottom-0 my-auto select-none active:bg-[#F1F1F1] active:shadow-inner'
        }
        onClick={goTo}
      >
        <Icon_left className="stroke-[2px] size-[14px] stroke-black" />
      </div>
      <p className="text-center leading-[22px]">{text}</p>
    </div>
  )
}

export default TopSection
