/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import CltDropzone from '@/app/components/dropzone/Dropzone'
import React, { useEffect, useState } from 'react'

const UploadImages = ({ setuploadedImages }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)

  useEffect(() => {
    setuploadedImages(imagesWithBlurDataUrl)
    console.log('imagesWithBlurDataUrl', imagesWithBlurDataUrl)
  }, [imagesWithBlurDataUrl])

  return (
    <CltDropzone
      parameters={{
        selectedImages,
        setSelectedImages,
        setImagesWithBlurDataUrl,
      }}
    />
  )
}

export default UploadImages
