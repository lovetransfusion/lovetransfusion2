'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

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

  const onUpload = async () => {
    for (const image of selectedImages) {
      let formData = new FormData()
      formData.append(image.name, image)
      // getFile(formData)

      // const config = {
      //   method: 'POST',
      //   url: process.env.NEXT_PUBLIC_ROOT_DOMAIN + '/components/dropzone/api',
      //   data: formData,
      // }
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ROOT_DOMAIN + '/components/dropzone/api',
        { data: { formData } }
      )
    }
    // console.log('selectedImages[0]', selectedImages[0].name)
  }

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
