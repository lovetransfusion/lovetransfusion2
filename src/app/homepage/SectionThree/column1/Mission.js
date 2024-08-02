import Icon_right from '@/app/components/icons/Icon_right'
import React from 'react'

const Mission = () => {
  const list1 = ['Illness', 'Injury', 'Grief']
  const list2 = ['Addiction', 'Loneliness', 'Anxiety', 'Depression']
  const list3 = ['Cancer', 'Accidents', 'Fire', 'Bedridden']
  return (
    <div className="pb-8">
      <p className={''}>
        Our mission is based on one simple fact:{' '}
        <span className="font-semibold underline">Love works</span>. People who
        hurt find great solace when they know that family, friends and even
        complete strangers care for them. Love Transfusion serves as a conduit
        and facilitates expressions of love & support through the services we
        offer.
      </p>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-3 mt-[9px] gap-x-[95px] items-center '
        }
      >
        <div
          className={
            'divide-y-[1px] divide-[#DFDFDF] max-sm:border-b-[1px] border-[#DFDFDF]'
          }
        >
          <p className="py-[9px]">Examples:</p>
          {list1?.map((item, index) => {
            return (
              <div
                key={index}
                className={'flex items-center gap-[10px] py-[9px]'}
              >
                <div
                  className={
                    'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
                  }
                >
                  <Icon_right className="size-2 stroke-[4px] stroke-white" />
                </div>
                <p className={''}>{item}</p>
              </div>
            )
          })}
        </div>
        <div
          className={
            'divide-y-[1px] divide-[#DFDFDF] max-sm:border-b-[1px] border-[#DFDFDF]'
          }
        >
          {list2?.map((item, index) => {
            return (
              <div
                key={index}
                className={'flex items-center gap-[10px] py-[9px]'}
              >
                <div
                  className={
                    'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
                  }
                >
                  <Icon_right className="size-2 stroke-[4px] stroke-white" />
                </div>
                <p className={''}>{item}</p>
              </div>
            )
          })}
        </div>
        <div
          className={
            'divide-y-[1px] divide-[#DFDFDF] max-sm:border-b-[1px] border-[#DFDFDF]'
          }
        >
          {list3?.map((item, index) => {
            return (
              <div
                key={index}
                className={'flex items-center gap-[10px] py-[9px]'}
              >
                <div
                  className={
                    'p-1 bg-primary rounded-full flex items-center justify-center size-[15px]'
                  }
                >
                  <Icon_right className="size-2 stroke-[4px] stroke-white" />
                </div>
                <p className={''}>{item}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Mission
