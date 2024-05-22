'use client'
// import CltUploadWidget from '@/app/components/_cloudinary/CltUploadWidget'
import CltDropzone from '@/app/components/_dropzone/Dropzone'
import React, { useState } from 'react'

const UploadImages = () => {
  const [uploadedFiles, setuploadedFiles] = useState(null)
  console.log('uploadedFiles', uploadedFiles)
  return (
    <div>
      <CltDropzone />
      {/* <CltUploadWidget
        parameters={{
          ButtonText: 'Upload Recipient Images',
          folder: `Testt`,
          maxFiles: 3,
          uploadedFiles,
          setuploadedFiles,
        }}
      /> */}
    </div>
  )
}

export default UploadImages
