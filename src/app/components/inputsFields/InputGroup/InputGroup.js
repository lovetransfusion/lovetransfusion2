import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputGroup = ({ children, className, ...props }) => {
  return (
    <div {...props} className={twMerge('group/input flex w-full relative', className)}>
      {children}
    </div>
  )
}

export default InputGroup