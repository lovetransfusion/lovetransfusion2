'use client'
import { useState } from 'react'
import QuillEditor from '@/app/components/ReactQuill/QuillEditor'

const AccordingToparagraph = ({
  parameters: { accordingTo, setaccordingTo },
}) => {
  const [popup, setpopup] = useState(null)

  const preview = () => {
    setpopup(true)
  }

  const defaultValue =
    '<p><strong>According to &lt;SOURCE&gt;:</strong> “&lt;CONTENT HERE&gt;"</p>'

  return (
    <div className={'flex flex-col gap-1 mb-2'}>
        <p className={''}>According To Paragraph:</p>
      <QuillEditor setValue={setaccordingTo} defaultValue={defaultValue} />
    </div>
  )
}

export default AccordingToparagraph
