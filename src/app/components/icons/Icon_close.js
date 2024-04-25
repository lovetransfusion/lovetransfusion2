import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_close = forwardRef(function Icon_close(
  { className, ...props },
  ref
) {
  return (
    <svg
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('w-4 h-4', className)}
      {...props}
      ref={ref}
    >
      <path
        id="Vector"
        d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
})

export default Icon_close
