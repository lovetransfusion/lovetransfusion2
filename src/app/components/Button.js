import { openSans } from '@/utilities/fonts/fonts'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  dark: `leading-[22px] text-sm rounded-[5px] font-semibold text-white px-[17px] py-2 bg-primary hover:bg-primary-600 transition-all duration-300 ${openSans.className}`,
  light: `leading-[22px] rounded-[5px] font-semibold px-[17px] py-2 bg-white hover:bg-neutral-200 text-black transition-all duration-300 ${openSans.className}`,
}
const sizes = {
  md: `leading-[22px] rounded-[5px] font-semibold text-xl text-white px-5 py-3 bg-primary hover:bg-primary-600 transition-all duration-300 ${openSans.className}`,
}

const Button = forwardRef(function Button(
  { children, className, variant, size, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['dark']
  const varSize = size ? sizes[size.toLowerCase()] : ''
  return (
    <button
      type={props.type || 'button'}
      ref={ref}
      className={twMerge(variation, varSize, className)}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
