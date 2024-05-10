import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { twMerge } from 'tailwind-merge'

const ContentContainerWithSidebar = ({ children, className }) => {
  return (
    <div
      className={
        'max-w-[1150px] px-3 mx-auto md:px-6 lg:px-10 xl:px-0 leading-[22px] py-[50px] flex flex-col lg:flex-row lg:divide-x-[1px] lg:divide-[#E5E5E5] gap-[50px]'
      }
    >
      <div className={twMerge('w-full', className)}>{children}</div>
      <Sidebar />
    </div>
  )
}

export default ContentContainerWithSidebar
