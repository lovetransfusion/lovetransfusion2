'use client'
import React, { useState } from 'react'
import ImagePreviewDesktop from './ImagePreviewDesktop'
import ImagePreviewMobile from './ImagePreviewMobile'
import Icon_close from '../icons/Icon_close'

// const [isOpen, setisOpen] = useState(false)

// const handleOpen = ({ index }) => {
//   const startAt = images.slice(index, images?.length)
//   const endAt = images.slice(0, index)
//   setpreviewImages([...startAt, ...endAt])
//   setisOpen(true)
// }
{
  /* <ImagePreview parameters={{ images: previewImages, isOpen, setisOpen }} /> */
}

const ImagePreview = ({ parameters: { images, isOpen, setisOpen } }) => {
  const handleClose = () => {
    setisOpen(false)
  }
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-95 z-[990]">
          <div className={'relative'}>
            <ImagePreviewDesktop parameters={{ images }} />
            <ImagePreviewMobile parameters={{ images }} />
            <Icon_close
              onClick={handleClose}
              className="absolute top-5 right-5 text-white z-50"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ImagePreview
