import React from 'react'
import utilityStore from '@/utilities/store/store'
import { useStore } from 'zustand'
import DonationSummary from '../DonationSummary'

const SummaryCarePackage = () => {
  const {
    carePackage: { donationAmount },
    setactiveStep,
  } = useStore(utilityStore)

  return <DonationSummary parameters={{ setactiveStep, donationAmount }} />
}

export default SummaryCarePackage
