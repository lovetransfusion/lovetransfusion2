import Image from 'next/image'
import React from 'react'

const DashboardHeader = ({ parameters: { display_name, avatar } }) => {
  return (
    <div className={'w-full bg-white shadow-sm'}>
      <div className={'flex h-fit items-center justify-end gap-2  px-5 py-2'}>
        <p className={''}>{display_name}</p>
        <Image
          src={avatar}
          width={50}
          height={50}
          quality={100}
          alt="user image"
          className="rounded-full border-[1px] border-[#ccc]"
        />
      </div>
    </div>
  )
}

export default DashboardHeader
