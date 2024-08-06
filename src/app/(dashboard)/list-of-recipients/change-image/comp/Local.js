'use client'
import React, { useState } from 'react'
import CltDropzone from '@/app/components/dropzone/Dropzone'
import ButtonLoader from '@/app/components/ButtonLoader'
import { uploadImagesToSupabase } from '@/app/components/dropzone/uploadImagesToSupabase'
import { revalidatePathCustom } from '../../actions'

const Local = ({ user, setisLocal }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [imagesWithBlurDataUrl, setImagesWithBlurDataUrl] = useState(null)
  const [loading, setloading] = useState(null)

  console.log('user', user)

  const handleClick = async () => {
    if (!imagesWithBlurDataUrl) return
    setloading({ id: 'uploadImages' })
    const { data, error } = await uploadImagesToSupabase({
      folder: 'gallery',
      table: 'admin_gallery',
      images: imagesWithBlurDataUrl,
      userId: user?.id,
    })
    if (data) {
      console.log('data', data)
      revalidatePathCustom('/list-of-recipients')
      setisLocal(false)
    } else if (error) {
      console.log('error', error)
    }
    setloading(null)
  }
  return (
    <div
      className={
        'relative flex flex-col gap-3 py-8 px-3 border border-neutral-100'
      }
    >
      <CltDropzone
        parameters={{
          selectedImages,
          setSelectedImages,
          imagesWithBlurDataUrl,
          setImagesWithBlurDataUrl,
          placeholder: 'Click to upload file.', // optional
          // quantityLimit: 3, // optional
          allowedType: {
            'image/*': [],
          },
        }}
      />
      <ButtonLoader
        onClick={handleClick}
        className={'w-full mt-2'}
        parameters={{ id: 'uploadImages', loading, setloading }}
      >
        Upoad
      </ButtonLoader>
    </div>
  )
}

export default Local
