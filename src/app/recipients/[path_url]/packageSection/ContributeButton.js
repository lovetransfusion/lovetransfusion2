import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import logoWhite from '../images/logo-white-svg.svg'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'

const ContributeButton = ({
  parameters: { setpopup },
}) => {
  const handleClick = () => {
    setpopup('carePackage')
  }
  return (
    <div
      className={
        'flex bg-primary hover:bg-primary-600 transition-all duration-500 rounded-[10px] py-3 px-[50px] border-4 border-white shadow-custom4 gap-3 cursor-pointer'
      }
      onClick={handleClick}
    >
      <Image src={logoWhite} alt="logo-white" />
      <p className={'font-demiCond text-white'}>Click Here To Contribute</p>
    </div>
  )
}

export default ContributeButton
