import React from 'react'

const Loading = () => {
  return (
    <div className={'w-full'}>
      <h2 className={'text-xl font-semibold text-primary'}>Payments</h2>
      <div className="my-6">
        <div className={'w-full h-12 bg-gray-200 animate-pulse'}></div>
        <div className={'w-full h-[152px]'}></div>
        <div className={'w-full h-[152px] bg-gray-200 animate-pulse'}></div>
        <div className={'w-full h-[152px]'}></div>
      </div>
    </div>
  )
}

export default Loading
