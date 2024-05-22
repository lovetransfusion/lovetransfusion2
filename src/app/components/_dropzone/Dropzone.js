'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { startUploadingImages } from './actions'

const CltDropzone = () => {
  const [selectedImages, setSelectedImages] = useState([])

  console.log('selectedImages', selectedImages)

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file])
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  })

  const onUpload = () => {
    console.log('uploaded images', selectedImages)
    const formData = new FormData()
    selectedImages.forEach((image) => {
      formData.append('file', image)
    })
    console.log('formData', formData)
    // startUploadingImages(formData)
  }

  console.log({ isDragActive, isDragAccept, isDragReject })
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={
            'bg-white text-[#C4C6C9] py-[7px] px-3 border-[1px] border-primary border-dashed'
          }
        >
          {isDragActive ? (
            <p>Drop file(s) here ...</p>
          ) : (
            <p>Click to upload files, or drag & drop files here.</p>
          )}
        </div>
      </div>

      {selectedImages.length > 0 && (
        <div className={'grid grid-cols-2 md:grid-cols-4 gap-2 mt-2'}>
          {selectedImages.map((image, index) => (
            <Image
              src={`${URL.createObjectURL(image)}`}
              width={300}
              height={300}
              quality={100}
              key={index}
              alt="uploaded image"
              className="my-auto"
            />
          ))}
        </div>
      )}
      {selectedImages.length > 0 && (
        <div className={''}>
          <button onClick={onUpload}>Upload to Cloudinary</button>
        </div>
      )}
    </div>
  )
}

export default CltDropzone
