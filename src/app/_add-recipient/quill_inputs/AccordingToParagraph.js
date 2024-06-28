'use client'
import { useEffect, useState } from 'react'
import QuillEditor from '@/app/components/ReactQuill/QuillEditor'
import Popup from '@/app/components/Popup'
import Preview_Quill from './Preview_Quill'
import addRecipientStore from '@/utilities/store/addRecipientStore'
import { useStore } from 'zustand'

const AccordingToparagraph = () => {
  const [value, setValue] = useState('')
  const [popup, setpopup] = useState(null)
  const { setAccording_to_paragraph } = useStore(addRecipientStore)

  useEffect(() => {
    setAccording_to_paragraph(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  const preview = () => {
    setpopup(true)
  }

  const defaultValue =
    '<p><strong>According to &lt;SOURCE&gt;:</strong> “&lt;CONTENT HERE&gt;"</p>'

  return (
    <div className={'flex flex-col gap-1'}>
      <div className={'flex justify-between'}>
        <p className={''}>According To Paragraph:</p>
        <p onClick={preview} className={'select-none text-primary'}>
          Preview
        </p>
      </div>
      <QuillEditor setValue={setValue} defaultValue={defaultValue} />
      {popup && (
        <Popup data={{ setpopup, modalContainer: 'max-w-[744px]', icon: 'hidden' }} className="backdrop-blur-none">
          <Preview_Quill />
        </Popup>
      )}
    </div>
  )
}

export default AccordingToparagraph
