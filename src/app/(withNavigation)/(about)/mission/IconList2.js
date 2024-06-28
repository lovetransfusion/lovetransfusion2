import Icon_right from '@/app/components/icons/Icon_right'
import React from 'react'

const IconList2 = () => {
  return (
    <div className={'divide-y-[1px] divide-[#E5E5E5]'}>
      <div className={'flex items-center gap-[10px] py-[9px]'}>
        <div
          className={
            'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
          }
        >
          <Icon_right className="size-2 stroke-[4px] stroke-white" />
        </div>
        <p className={''}>Addiction</p>
      </div>
      <div className={'flex items-center gap-[10px] py-[9px]'}>
        <div
          className={
            'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
          }
        >
          <Icon_right className="size-2 stroke-[4px] stroke-white" />
        </div>
        <p className={''}>Loneliness</p>
      </div>
      <div className={'flex items-center gap-[10px] py-[9px]'}>
        <div
          className={
            'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
          }
        >
          <Icon_right className="size-2 stroke-[4px] stroke-white" />
        </div>
        <p className={''}>Anxiety</p>
      </div>
      <div className={'flex items-center gap-[10px] py-[9px]'}>
        <div
          className={
            'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
          }
        >
          <Icon_right className="size-2 stroke-[4px] stroke-white" />
        </div>
        <p className={''}>Depression</p>
      </div>
    </div>
  )
}

export default IconList2
