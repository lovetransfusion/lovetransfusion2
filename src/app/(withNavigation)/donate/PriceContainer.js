import React from 'react'

const PriceContainer = ({ children, isSelected, ...props }) => {
  return (
    <div
      {...props}
      className={`flex ${
        isSelected
          ? 'bg-white text-primary'
          : 'text-white bg-primary hover:bg-primary-400 hover:scale-[1.03] transition-transform duration-300'
      }  border-2 border-primary justify-center items-center px-10 py-[13px] rounded-lg  select-none cursor-default`}
    >
      <p
        className={
          'text-[27px] relative font-semibold after:content-["00"] after:text-[13.4px] after:absolute after:top-[5px] after:right-[-18px] before:content-["$"] before:text-[13.4px] before:absolute before:top-[5px] before:left-[-9px]'
        }
      >
        {children}
      </p>
    </div>
  )
}

export default PriceContainer
