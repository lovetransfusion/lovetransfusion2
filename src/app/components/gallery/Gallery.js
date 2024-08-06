'use client'
import Image from 'next/image'
import Icon_plus from '../icons/Icon_plus'
import React, { useState } from 'react'
import ImagePreview from '@/app/components/imagePreview/ImagePreview'

const Gallery = ({ user, images }) => {
  const [isOpen, setisOpen] = useState(null)
  const [previewImages, setpreviewImages] = useState([])
  console.log('user', user)
  const handleOpen = ({ index }) => {
    const startAt = images.slice(index, images?.length)
    const endAt = images.slice(0, index)
    setpreviewImages([...startAt, ...endAt])
    setisOpen(true)
  }
  return (
    <div className="min-w-full h-full border-[1px] rounded-md p-1 md:p-8">
      <div className={'flex cursor-default'}>
        <div className={'py-3 px-4 bg-neutral-100 border border-neutral-100'}>
          <p className={'flex gap-2 items-center'}>
            <Icon_plus className="text-neutral-400" /> Add more images
          </p>
        </div>
        <div className={'py-3 px-4 border border-neutral-500'}>
          <p className={''}>Gallery</p>
        </div>
      </div>
      <ImagePreview parameters={{ images: previewImages, isOpen, setisOpen }} />
      <div
        className={
          'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-8 px-3 border border-neutral-100'
        }
      >
        {images?.map((item, index) => {
          const { fullPath } = item
          return (
            <div
              key={index}
              className={'relative w-full h-[220px] lg:h-[270px]'}
            >
              <Image
                onClick={() => handleOpen({ index })}
                src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${fullPath}`}
                alt={'image'}
                fill
                sizes="100vw"
                quality={100}
                className="object-cover shadow"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
