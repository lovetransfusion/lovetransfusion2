/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import CltDropzone from '@/app/components/dropzone/Dropzone'
import React, { useEffect, useState } from 'react'

const UploadImages = ({ setuploadedImages }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)

  useEffect(() => {
    setuploadedImages(imagesWithBlurDataUrl)
  }, [imagesWithBlurDataUrl])

  return (
    <CltDropzone
      parameters={{
        selectedImages,
        setSelectedImages,
        imagesWithBlurDataUrl,
        setImagesWithBlurDataUrl,
      }}
    />
  )
}

export default UploadImages
