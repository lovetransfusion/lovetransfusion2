import addRecipientStore from '@/utilities/store/addRecipientStore'
import React from 'react'
import { useStore } from 'zustand'

const Preview_Quill = () => {
  const {
    recipient: { according_to_paragraph },
  } = useStore(addRecipientStore)
  console.log('according_to_paragraph', according_to_paragraph)
  return (
    <div className={'w-full p-5'}>
      {according_to_paragraph ? (
        <p
          className={''}
          dangerouslySetInnerHTML={{ __html: according_to_paragraph }}
        />
      ) : (
        <p className={'p-10 rounded-md bg-neutral-50 text-lg text-center'}>
          No content to show.
        </p>
      )}
    </div>
  )
}

export default Preview_Quill
