import React from 'react'
import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import DonationSummary from '../DonationSummary'

const SummaryAdCampaign = () => {
  const {
    adCampaign: { donationAmount },
    setactiveStepAC,
  } = useStore(utilityStore)

  return (
    <DonationSummary
      parameters={{ setactiveStep: setactiveStepAC, donationAmount }}
    />
  )
}

export default SummaryAdCampaign
