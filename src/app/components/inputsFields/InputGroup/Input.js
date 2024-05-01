import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  default:
    'py-[6px] px-3 max-h-[38px] w-full text-[16px] text-[#222] rounded-[5px] border-[1px] border-[#c7e9ff] placeholder:text-primary focus-visible:outline-none',
  basic:
    'py-[6px] px-3 max-h-[38px] w-full text-[16px] text-[#222] rounded-[5px] border-[1px] border-[#c7e9ff] placeholder:text-primary focus-visible:outline-none border-[#8C8C8C] ring-1 ring-white py-[23px] rounded-md focus-visible:ring-primary focus-visible:border-primary placeholder:text-[#7D8B9F]',
}

const Input = forwardRef(function Input(
  { children, className, variant, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['default']
  return (
    <div className='w-full relative'>
      <input
        ref={ref}
        type={props?.type || 'text'}
        className={twMerge(
          variation,
          'group-has-[svg]/input:pl-10',
          className,
          props?.error && 'border-red-500'
        )}
        {...props}
      />
      {props?.error && (
        <p className="absolute top-0 right-1 text-red-500 z-10 pl-3 leading-[22px] my-1 bg-red-100 py-1 w-fit px-4 mb-2 rounded-md">
          {props?.error}
        </p>
      )}
    </div>
  )
})

export default Input
