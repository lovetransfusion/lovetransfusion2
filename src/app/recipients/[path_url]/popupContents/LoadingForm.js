import Icon_spinner from '@/app/components/icons/Icon_spinner'
import React from 'react'

const LoadingForm = () => {
  return (
    <div
      className={
        'flex justify-center gap-2 items-center h-full w-full min-h-[620px]'
      }
    >
      <Icon_spinner className="animate-spin size-12 text-primary" />
      <p className="text-3xl font-bold">Loading...</p>
    </div>
  )
}

export default LoadingForm
