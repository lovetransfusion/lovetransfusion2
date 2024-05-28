import utilityStore from '@/utilities/store/store'
import Image from 'next/image'
import React from 'react'
import { useStore } from 'zustand'
import TestimonyImageDesktop from '../images/video-thumbnail.png'

const TestimonyImage = () => {
  const { setPopup } = useStore(utilityStore)
  const handleClick = () => {
    setPopup({
      content: 'VideoPopup',
      noPadding: true,
      maxW: '982px',
    })
  }
  return (
    <Image
      src={TestimonyImageDesktop}
      alt="testimony"
      quality={100}
      onClick={handleClick}
    />
  )
}

export default TestimonyImage
