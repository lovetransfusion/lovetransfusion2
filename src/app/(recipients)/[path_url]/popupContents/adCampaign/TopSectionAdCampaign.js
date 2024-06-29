import utilityStore from '@/utilities/store/store'
import React from 'react'
import { useStore } from 'zustand'
import TopSection from '../TopSection'

const TopSectionAdCampaign = ({ parameters: { text, number } }) => {
  const { setactiveStepAC } = useStore(utilityStore)
  return (
    <TopSection parameters={{ setactiveStep: setactiveStepAC, text, number }} />
  )
}

export default TopSectionAdCampaign
