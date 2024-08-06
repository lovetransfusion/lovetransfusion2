'use client'
import React, { useState } from 'react'
// import SelectFrom from './comp/SelectFrom'
import Popup from '@/app/components/Popup'
import Button from '@/app/components/Button'
import SelectFrom from './comp/SelectFrom'

const SetImages = ({ user, images, id }) => {
  const [popup, setpopup] = useState(null)

  const handleClick = (field) => {
    setpopup(field)
  }
  return (
    <div className="relative flex gap-1">
        <Button
          onClick={() => handleClick('profile_picture')}
          className="text-nowrap"
        >
          Avatar
        </Button>
        <Button
          onClick={() => handleClick('poster_image')}
          className="text-nowrap"
        >
          Poster
        </Button>
      {popup && (
        <Popup
          data={{
            setpopup,
            bgNotClickable: true,
            noScrollbar: true,
            modalContainer: 'max-w-[900px]',
          }}
        >
          {/* <SelectFrom parameters={{ user, images, setpopup }} /> */}
          <SelectFrom
            user={user}
            fieldName={popup}
            images={images}
            id={id}
            setpopup={setpopup}
          />
        </Popup>
      )}
    </div>
  )
}

export default SetImages
