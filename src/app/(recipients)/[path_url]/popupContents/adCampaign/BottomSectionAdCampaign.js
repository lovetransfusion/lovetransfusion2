import Button from '@/app/components/Button'
import Icon_circle from '@/app/components/icons/Icon_circle'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_right from '@/app/components/icons/Icon_right'
import utilityStore from '@/utilities/store/store'
import React from 'react'
import { useStore } from 'zustand'
import BottomSection from '../BottomSection'

const BottomSectionAdCampaign = ({ parameters: { goTo, donee } }) => {
  const {
    setDoneeAC,
    adCampaign: { activeStep },
    setactiveStepAC,
  } = useStore(utilityStore)
  return (
    <BottomSection
      parameters={{
        goTo,
        donee,
        setDonee: setDoneeAC,
        activeStep,
        setactiveStep: setactiveStepAC,
      }}
    />
  )
}

export default BottomSectionAdCampaign
