import Icon_edit from '@/app/components/icons/Icon_edit'
import React from 'react'

const DonationSummary = ({ parameters: { setactiveStep, donationAmount } }) => {
  const handleClick = () => {
    setactiveStep(2)
  }
  return (
    <div>
      <p
        className={'text-[18px] italic text-[#6b6b6b] text-center'}
      >{`Here's what you're about to donate:`}</p>

      <div
        className={
          'px-8 mt-5 bg-[#F9F9F9] text-[#1a202c] divide-y divide-[#F2F2F2]'
        }
      >
        <div className={'flex justify-between py-[18px]'}>
          <p className="text-[18px] font-mediumCond">Donation Summary</p>
          <div
            className={'flex gap-1 items-center text-primary cursor-default'}
            onClick={handleClick}
          >
            <p className="underline text-sm">Edit Donation</p>
            <Icon_edit />
          </div>
        </div>
        <div className={'flex justify-between text-[17px] py-[18px]'}>
          <p>Payment Amount</p>
          <p>${parseFloat(donationAmount).toFixed(2)}</p>
        </div>
        <div className={'flex justify-between text-[17px] py-[18px]'}>
          <p>Giving Frequency</p>
          <p>One time</p>
        </div>
        <div className={'flex justify-between py-[18px]'}>
          <p>Donation Total</p>
          <p className="font-semibold">
            ${parseFloat(donationAmount).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DonationSummary
