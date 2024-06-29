import React, { useRef } from 'react'
import PriceContainer from '../PriceContainer'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import NumberInput from '../NumberInput'
import { donationPrices } from './donationPrices'

const SelectAmount = ({
  parameters: { donationAmount, setdonationAmount },
}) => {
  const numberRef = useRef(null)
  const handleCustomAmountClick = () => {
    setdonationAmount('')
    if (numberRef.current) {
      numberRef.current.focus()
    }
  }
  const handlePriceClick = (price) => {
    setdonationAmount(price)
  }
  return (
    <>
      <InputGroup>
        <NumberInput
          ref={numberRef}
          parameters={{
            donationAmount,
            setdonationAmount,
            defaultValue: 10,
          }}
          className="pl-12 rounded-lg border-2 border-[#424242] text-right text-[42px] font-semibold pt-2 pb-3 leading-10"
        />
        <p
          className={
            'absolute w-[48px] text-[#555555] text-center text-[22px] h-fit top-0 bottom-0 my-auto'
          }
        >
          $
        </p>
      </InputGroup>
      <div className={'grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-[13px] mt-[26px]'}>
        {donationPrices.map((item, i) => {
          const { amount, active } = item
          return (
            <PriceContainer
              key={i}
              onClick={() => handlePriceClick(amount)}
              isSelected={donationAmount === amount && true}
            >
              {amount}
            </PriceContainer>
          )
        })}
        <div
          onClick={handleCustomAmountClick}
          className={`flex ${
            !donationPrices.some((item) => donationAmount === item.amount)
              ? 'bg-white text-primary'
              : 'text-white bg-primary hover:bg-primary-400 hover:scale-[1.03] transition-transform duration-300'
          }  border-2 border-primary justify-center items-center px-10 py-[13px] rounded-lg  select-none cursor-default`}
        >
          <p
            className={
              'text-[27px] text-center relative font-semibold leading-6 text-base'
            }
          >
            Custom Amount
          </p>
        </div>
      </div>
    </>
  )
}

export default SelectAmount
