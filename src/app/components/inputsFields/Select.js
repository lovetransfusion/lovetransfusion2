import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  default:
    'py-[8px] px-3 max-h-[38px] w-full text-[16px] text-[#222] rounded-[5px] border-[1px] border-[#c7e9ff] placeholder:text-primary focus-visible:outline-none',
  basic:
    'py-[6px] px-3 max-h-[38px] w-full text-[16px] text-[#222] rounded-[5px] border-[1px] border-[#c7e9ff] focus-visible:outline-none border-[#8C8C8C] ring-1 ring-white py-[23px] rounded-md focus-visible:ring-primary focus-visible:border-primary placeholder:text-[#7D8B9F]',
}

// Example:
//<Select id="gender" placeholder="- Select Gender -">
//  <option value="">- Select Gender -</option>
//</Select>

const Select = forwardRef(function Select(
  { children, className, variant, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['default']
  return (
    <>
      <select
        ref={ref}
        className={twMerge(variation, className)}
        title={props?.id}
        {...props}
      >
        {children}
      </select>
    </>
  )
})

export default Select
