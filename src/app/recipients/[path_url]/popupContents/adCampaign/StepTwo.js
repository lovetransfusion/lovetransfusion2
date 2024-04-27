import Input from '@/app/components/inputsFields/InputGroup/Input'
import React, { useRef } from 'react'
import BottomSection from './BottomSectionAdCampaign'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'
import TopSectionAdCampaign from './TopSectionAdCampaign'

const StepTwo = ({ firstName }) => {
  const {
    adCampaign: { donationAmount, priceList },
    setDonationAmountAC,
    setActivePriceAC,
  } = useStore(utilityStore)
  const inputRef = useRef(null)

  const handlePriceClick = ({ e, price, id }) => {
    e.stopPropagation()
    const float = price.replace('$', '')
    if (price === 'Custom Amount') {
      setDonationAmountAC('')
      setActivePriceAC(id)
      inputRef.current.focus()
      return
    }
    const parsedFloat = parseFloat(float)
    setDonationAmountAC(parsedFloat)
    setActivePriceAC(id)
  }

  const handleCustomAmountChange = (e) => {
    const amount = e.target.value
    setDonationAmountAC(amount)
  }

  const handleContainerClick = () => {
    if (donationAmount === '') {
      setDonationAmountAC(10)
      setActivePriceAC(1)
    }
  }

  const handleInputClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="w-full" onClick={handleContainerClick}>
      <TopSectionAdCampaign parameters={{ text: 'Choose Amount', number: 1 }} />

      <div className="px-4 md:px-8">
        <p
          className={
            'leading-[26px] text-xl mt-6 mb-9 text-center text-balance'
          }
        >
          Your contribution will help us raise awareness for {firstName}. How
          much would you like to donate?
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
                    ? 'border-[#9A9A9A] bg-white text-[#323232] shadow-customInner1'
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
