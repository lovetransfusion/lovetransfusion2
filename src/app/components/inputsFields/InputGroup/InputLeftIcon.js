import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputLeftIcon = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'absolute w-fit h-fit top-0 bottom-0 my-auto left-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export default InputLeftIcon
