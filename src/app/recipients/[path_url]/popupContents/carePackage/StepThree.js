import React from 'react'
import BottomSection from './BottomSection'
import TopSection from './TopSection'
import Icon_edit from '@/app/components/icons/Icon_edit'
import Button from '@/app/components/Button'
import UserForm from './UserForm'

const StepThree = () => {
  return (
    <div className="w-full">
      <TopSection parameters={{ text: 'Add Your Information', number: 2 }} />
      <div className={'flex flex-col px-8'}>
        <p className={'text-[22px] mt-9 font-mediumCond text-center'}>
          {`Who's giving today?`}
        </p>
        <p className={'text-sm text-center italic text-[#767676]'}>
          We’ll never share this information with anyone.
        </p>

        <UserForm />

        <p
          className={'text-[18px] mt-8 italic text-[#6b6b6b] text-center'}
        >{`Here's what you're about to donate:`}</p>

        <div
          className={
            'px-8 mt-5 bg-[#F9F9F9] text-[#1a202c] divide-y divide-[#F2F2F2]'
          }
        >
          <div className={'flex justify-between py-[18px]'}>
            <p className="text-[18px] font-mediumCond">Donation Summary</p>
            <div className={'flex gap-1 items-center text-primary'}>
              <p className="underline text-sm">Edit Donation</p>
              <Icon_edit />
            </div>
          </div>
          <div className={'flex justify-between text-[17px] py-[18px]'}>
            <p>Payment Amount</p>
            <p>$10.00</p>
          </div>
          <div className={'flex justify-between text-[17px] py-[18px]'}>
            <p>Giving Frequency</p>
            <p>One time</p>
          </div>
          <div className={'flex justify-between py-[18px]'}>
            <p>Donation Total</p>
            <p className="font-semibold">$10.00</p>
          </div>
        </div>
        <Button size="md" className="w-full mt-5">
          Submit Donation
        </Button>
      </div>
      <BottomSection parameters={{}} />
    </div>
  )
}

export default StepThree
