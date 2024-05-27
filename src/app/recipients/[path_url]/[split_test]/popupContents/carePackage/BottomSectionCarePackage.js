import utilityStore from '@/utilities/store/store'
import React from 'react'
import { useStore } from 'zustand'
import BottomSection from '../BottomSection'

const BottomSectionCarePackage = ({ parameters: { goTo, donee } }) => {
  const {
    setDonee,
    carePackage: { activeStep },
    setactiveStep,
  } = useStore(utilityStore)
  return (
    <BottomSection
      parameters={{
        goTo,
        donee,
        setDonee,
        activeStep,
        setactiveStep,
      }}
    />
  )
}

export default BottomSectionCarePackage
