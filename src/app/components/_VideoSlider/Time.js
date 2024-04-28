import { Time } from '@vidstack/react'
import React from 'react'

const VsTime = () => {
  return (
    <div className="ml-1.5 flex items-center text-sm font-medium">
      <Time className="time hidden group-data-[started]:block" type="current" />
      <div className="mx-1 text-white/80">/</div>
      <Time className="time group-data-[started]:hidden" type="duration" />
    </div>
  )
}

export default VsTime
