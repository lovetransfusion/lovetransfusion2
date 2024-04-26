import Input from '@/app/components/inputsFields/InputGroup/Input'
import React, { useRef } from 'react'
import BottomSection from './BottomSection'
import TopSection from './TopSection'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'

const StepTwo = () => {
  const {
    carePackage: { donationAmount, priceList },
    setDonationAmount,
    setActivePrice,
  } = useStore(utilityStore)
  const inputRef = useRef(null)

  const handlePriceClick = ({ e, price, id }) => {
    e.stopPropagation()
    const float = price.replace('$', '')
    if (price === 'Custom Amount') {
      setDonationAmount('')
      setActivePrice(id)
      inputRef.current.focus()
      return
    }
    const parsedFloat = parseFloat(float)
    setDonationAmount(parsedFloat)
    setActivePrice(id)
  }

  const handleCustomAmountChange = (e) => {
    const amount = e.target.value
    setDonationAmount(amount)
  }

  const handleContainerClick = () => {
    if (donationAmount === '') {
      setDonationAmount(10)
      setActivePrice(1)
    }
  }

  const handleInputClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="w-full" onClick={handleContainerClick}>
      <TopSection parameters={{ text: 'Choose Amount', number: 1 }} />

      <div className="px-8">
        <p className={'text-[22px] mt-6 mb-9 font-mediumCond text-center'}>
          How much would you like to donate?
        </p>
        <div
          className={
            'flex border-[1px] py-5 max-w-[251px] mx-auto border-[#696969] items-center shadow-customInner1 rounded-md divide-x divide-[#4C4C4C] divide-dashed'
          }
        >
          <p className={'min-w-[52px] text-center text-[#555] text-xl'}>$</p>
          <div>
            <Input
              type="number"
              placeholder=""
              value={donationAmount}
              ref={inputRef}
              className="border-none text-[32px] text-center "
              onChange={handleCustomAmountChange}
              onClick={handleInputClick}
            />
          </div>
        </div>

        <div
          className={
            'grid grid-cols-3 gap-2 mt-12 text-[18px] text-white font-mediumCond'
          }
        >
          {priceList?.map((item, index) => {
            const { id, price, active } = item
            return (
              <div
                key={index}
                className={`flex justify-center p-[17px] items-center border-[1px] ${
                  active
                    ? 'border-[#9A9A9A] bg-white text-[#323232]'
                    : 'border-[#2F8EDD] bg-primary'
                }  rounded-lg min-h-[63px] max-h-[63px] leading-[22px] text-center select-none`}
                onClick={(e) => handlePriceClick({ e, price, id })}
              >
                {price}
              </div>
            )
          })}
        </div>
        <BottomSection parameters={{ goTo: 3 }} />
      </div>
    </div>
  )
}

export default StepTwo
