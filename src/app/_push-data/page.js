'use client'
import React from 'react'
import Button from '../components/Button'
import { pushData, pushSupabaseData } from '@/config/algolia/pushData'
import { pagesData } from './pagesData'

const page = () => {
  const handlePushData = async () => {
    pushData(pagesData)
  }
  return (
    <div>
      <Button onClick={handlePushData}>Push data</Button>
    </div>
  )
}

export default page
