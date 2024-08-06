import Image from 'next/image'
import { updateRecipient } from './actions'
import { revalidatePathCustom } from '../../actions'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import { useState } from 'react'

const Gallery = ({ images, id, setpopup, fieldName }) => {
  console.log('fieldName', fieldName)
  const [loading, setloading] = useState(null)
  console.log('loading', loading)
  const handleSelect = async (item) => {
    setloading(item?.id)
    const { data, error } = await updateRecipient({
      data:
        fieldName === 'profile_picture'
          ? { profile_picture: item }
          : { poster_image: item },
      id,
    })
    if (data) {
      revalidatePathCustom('/list-of-recipients')
      setpopup(null)
    }
    if (error) {
      console.log('error', error)
    }
    setloading(null)
  }
  return (
    <div
      className={
        'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-8 px-3 border border-neutral-100'
      }
    >
      {images?.map((item, index) => {
        const { id, fullPath, blurDataURL } = item
        console.log('item', item)
        return (
          <div key={index} className={'group relative w-full h-[150px]'}>
            <Image
              // onClick={() => handleOpen({ index })}
              src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${fullPath}`}
              placeholder="blur"
              blurDataURL={blurDataURL}
              alt={'image'}
              fill
              sizes="100vw"
              quality={100}
              className="object-cover shadow"
              onClick={() => handleSelect(item)}
            />
            {loading === id && (
              <Icon_spinner className="animate-spin size-8 absolute top-0 right-0 bottom-0 left-0 m-auto text-white shadow-lg" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
