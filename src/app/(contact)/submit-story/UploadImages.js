'use client'
import CltUploadWidget from '@/app/components/cloudinary/CltUploadWidget'
import React, { useState } from 'react'

const UploadImages = () => {
  const [uploadedFiles, setuploadedFiles] = useState(null)
  console.log('uploadedFiles', uploadedFiles)
  return (
    <div>
      <CltUploadWidget
        parameters={{
          ButtonText: 'Upload Recipient Images',
          folder: `Testt`,
          maxFiles: 3,
          uploadedFiles,
          setuploadedFiles,
        }}
      />
    </div>
  )
}

export default UploadImages
