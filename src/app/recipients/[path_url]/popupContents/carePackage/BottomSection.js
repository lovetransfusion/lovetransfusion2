import Button from '@/app/components/Button'
import Icon_circle from '@/app/components/icons/Icon_circle'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_right from '@/app/components/icons/Icon_right'
import utilityStore from '@/utilities/store/store'
import React from 'react'
import { useStore } from 'zustand'

const BottomSection = ({ parameters: { goTo, donee } }) => {
  const {
    setDonee,
    carePackage: { activeStep },
    setactiveStep,
  } = useStore(utilityStore)

  const handleButtonClick = () => {
    console.log('Entered Handle button click')
    if (activeStep !== 3 && goTo) {
      if (donee) setDonee(donee)
      setactiveStep(goTo)
    }
  }

  const handleNavigatorClick = (number) => {
    setactiveStep(number)
  }
  return (
    <>
      <div className={'flex flex-col items-center'}>
        {activeStep !== 3 && (
          <Button
            onClick={handleButtonClick}
            size="md"
            className="mt-[52px] mx-auto"
          >
            Donate{' '}
            <Icon_right className="text-white stroke-white size-[14px] stroke-[2px]" />
          </Button>
        )}
        <div className="flex gap-3 mt-7">
          <Icon_circle
            className={`size-3 text-[${
              activeStep === 1 ? '#747474' : '#e4e4e4'
            }]`}
            onClick={() => handleNavigatorClick(1)}
          />
          <Icon_circle
            className={`size-3 ${
              activeStep === 2 ? 'text-[#747474]' : 'text-[#e4e4e4]'
            }`}
            onClick={() => handleNavigatorClick(2)}
          />
          <Icon_circle
            className={`size-3 text-[${
              activeStep === 3 ? '#747474' : '#e4e4e4'
            }]`}
            onClick={() => handleNavigatorClick(3)}
          />
        </div>
      </div>
      <div
        className={
          'flex text-xs border-t-[1px] border-[#F2F2F2] gap-2 mt-[35px] justify-center items-center py-[22px] bg-[#FBFBFB] text-[#989898]'
        }
      >
        <Icon_padlock className="size-4" />
        Secure donation
      </div>
    </>
  )
}

export default BottomSection
