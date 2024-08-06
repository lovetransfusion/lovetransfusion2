'use client'
import React, { useEffect, useState } from 'react'
import Popup from '@/app/components/Popup'
import Button from '@/app/components/Button'
import LoadingComponent from '@/app/components/LoadingComponent'
import dynamic from 'next/dynamic'
import Toast from '@/app/components/Toast'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
const ClientAddNewRecipient = dynamic(() => import('./ClientAddNewRecipient'), {
  loading: () => <LoadingComponent className={'min-h-[1000px]'} />,
})
const AddNewButton = ({ user }) => {
  const [popup, setpopup] = useState(null)
  const { toast, settoast } = useStore(utilityStore)

  // useEffect(()=> {

  // }, [toast])

  const handleButtonClick = () => {
    setpopup(true)
  }

  return (
    <>
      <Toast parameters={{ toast, settoast }} />
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
          <ClientAddNewRecipient parameters={{ setpopup, user }} />
        </Popup>
      )}
    </>
  )
}

export default AddNewButton
