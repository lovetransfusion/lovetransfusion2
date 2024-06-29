'use client'

import CltDropzone from '@/app/components/dropzone/Dropzone'
import { useState } from 'react'

const UploadTest = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)
  console.log('imagesWithBlurDataUrl', imagesWithBlurDataUrl)
  return (
    <div>
      <CltDropzone
        parameters={{
          selectedImages,
          setSelectedImages,
          setImagesWithBlurDataUrl,
        }}
      />
    </div>
  )
}

export default UploadTest
