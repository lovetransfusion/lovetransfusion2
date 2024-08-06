import Icon_plus from '@/app/components/icons/Icon_plus'
import Gallery from './Gallery'
import Local from './Local'
import { useState } from 'react'

const SelectFrom = ({ images, user, id, setpopup, fieldName }) => {
  const [isLocal, setisLocal] = useState(false)
  const handleLocal = () => {
    setisLocal(true)
  }
  const handleGallery = () => {
    setisLocal(false)
  }
  return (
    <div className="min-w-full h-full border-[1px] rounded-md p-1 md:p-8">
      <div className={'flex cursor-default'}>
        <div
          className={`py-3 px-4 ${
            !isLocal
              ? 'bg-neutral-100 border border-neutral-100'
              : 'border border-neutral-500'
          }`}
          onClick={handleLocal}
        >
          <p className={'flex gap-2 items-center'}>
            <Icon_plus className="text-neutral-400" /> Upload Images
          </p>
        </div>
        <div
          className={`py-3 px-4 border ${
            isLocal
              ? 'bg-neutral-100 border border-neutral-100'
              : 'border border-neutral-500'
          }`}
          onClick={handleGallery}
        >
          <p className={''}>Gallery</p>
        </div>
      </div>
      {isLocal && <Local user={user} setisLocal={setisLocal} />}
      {!isLocal && (
        <Gallery
          images={images}
          id={id}
          setpopup={setpopup}
          fieldName={fieldName}
        />
      )}
    </div>
  )
}

export default SelectFrom
