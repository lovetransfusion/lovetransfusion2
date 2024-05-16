import React from 'react'

const CommentsFallback = () => {
  return (
    <div className={'mt-6'}>
      <div
        className={
          'flex animate-pulse shadow-sm rounded-md bg-gray-50 px-[15px] py-5'
        }
      >
        <div className={'flex gap-5'}>
          <div className={'bg-gray-300 size-[45px] rounded-full '}></div>
          <div className={'flex flex-col gap-2 justify-center'}>
            <div className={'w-[280px] h-2 bg-gray-300'}></div>
            <div className={'w-[200px] h-2 bg-gray-300'}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsFallback
