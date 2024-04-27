import React from 'react'
import TopSection from '../TopSection'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'

const TopSectionCarePackage = ({ parameters: { text, number } }) => {
  const { setactiveStep } = useStore(utilityStore)
  return <TopSection parameters={{ setactiveStep, text, number }} />
}

export default TopSectionCarePackage
