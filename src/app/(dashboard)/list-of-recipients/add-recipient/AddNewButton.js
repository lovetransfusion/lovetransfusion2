'use client'
import React, { useState } from 'react'
import Popup from '@/app/components/Popup'
import Button from '@/app/components/Button'
import LoadingComponent from '@/app/components/LoadingComponent'
import dynamic from 'next/dynamic'
const ClientAddNewRecipient = dynamic(() => import('./ClientAddNewRecipient'), {
  loading: () => <LoadingComponent className={'min-h-[1000px]'} />,
})
const AddNewButton = () => {
  const [popup, setpopup] = useState(null)

  const handleButtonClick = () => {
    setpopup(true)
  }
  
  return (
    <>
      <Button onClick={handleButtonClick}>Add New</Button>
      {popup && (
        <Popup
          data={{
            setpopup,
            modalContainer: 'max-w-[1000px]',
            noScrollbar: true,
            bgNotClickable: true,
          }}
        >
          <ClientAddNewRecipient parameters={{ setpopup }} />
        </Popup>
      )}
    </>
  )
}

export default AddNewButton
