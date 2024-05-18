'use client'
import React from 'react'
import Button from '../components/Button'
import { pushData } from '@/config/algolia/pushData'
import AlgoliaComponents from './AlgoliaComponents'

const page = () => {
  const handlePushData = async () => {
    pushData()
  }
  return (
    <div>
      <AlgoliaComponents />
      <Button onClick={handlePushData}>Push data</Button>
    </div>
  )
}

export default page
