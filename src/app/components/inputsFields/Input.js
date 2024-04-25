import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Input = forwardRef(function Input(
  { children, className, variant, ...props },
  ref
) {
  const defaultStyle =
    'py-[6px] px-3 max-h-[38px] w-full text-[16px] text-[#222] rounded-[5px] border-[1px] border-[#c7e9ff] placeholder:text-primary focus-visible:outline-none'
  return (
    <>
      <input
        ref={ref}
        type={props?.type || 'text'}
        placeholder={props?.placeholder || 'Type here'}
        className={twMerge(
          defaultStyle,
          className,
          props?.error && 'border-red-500'
        )}
        {...props}
      />
      {props?.error && (
        <p className="text-red-500 pl-3 my-1 bg-red-100 py-1 w-fit px-4 mb-2 rounded-sm">
          {props?.error}
        </p>
      )}
    </>
  )
})

export default Input
