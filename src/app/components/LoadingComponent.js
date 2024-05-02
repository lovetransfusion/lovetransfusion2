import Icon_spinner from '@/app/components/icons/Icon_spinner'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const LoadingComponent = ({ className }) => {
  return (
    <div
      className={twMerge(
        'flex justify-center gap-2 items-center h-full w-full',
        className
      )}
    >
      <Icon_spinner className="animate-spin size-12 text-primary" />
      <p className="text-3xl font-bold">Loading...</p>
    </div>
  )
}

export default LoadingComponent
