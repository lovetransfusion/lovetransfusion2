import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Divider = forwardRef(function Divider(
  { children, className, variant, size, ...props },
  ref
) {
  return (
    <div ref={ref} {...props} className="relative h-fit">
      <div
        className={'flex z-10 w-fit relative mx-auto bg-white leading-[22px]'}
      >
        {children}
      </div>
      <div
        className={twMerge(
          'w-full z-0 absolute top-0 bottom-0 my-auto left-0 right-0 mx-auto border-b-[2px] border-black h-fit',
          className
        )}
      />
    </div>
  )
})

export default Divider
