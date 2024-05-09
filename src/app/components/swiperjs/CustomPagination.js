import React from 'react'
import Icon_circle from '../icons/Icon_circle'
import { twMerge } from 'tailwind-merge'

const CustomPagination = ({
  className,
  parameters: { array, handlePaginationclick, activeIndex },
}) => {
  console.log('array', array)
  return (
    <div
      className={twMerge('flex relative gap-[10px] justify-center', className)}
    >
      {array?.map((item, i) => {
        return (
          <Icon_circle
            key={i}
            onClick={() => handlePaginationclick(i)}
            className={`size-[10px] ${
              activeIndex === i ? 'text-[#B8BFC5]' : 'text-white'
            } border-2 border-[#B8BFC5] rounded-full cursor-pointer`}
          />
        )
      })}
    </div>
  )
}

export default CustomPagination
