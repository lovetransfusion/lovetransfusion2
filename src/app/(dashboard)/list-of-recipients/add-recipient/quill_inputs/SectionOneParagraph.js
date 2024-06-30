'use client'
import { useState } from 'react'
import QuillEditor from '@/app/components/ReactQuill/QuillEditor'

const SectionOneParagraph = ({
  parameters: { sectOneParagrpah, setsectOneParagrpah },
}) => {
  const [popup, setpopup] = useState(null)

  const preview = () => {
    setpopup(true)
  }

  return (
    <div className={'flex flex-col gap-1 mb-2'}>
      <p className={''}>Section One Paragraph:</p>
      <QuillEditor
        setValue={setsectOneParagrpah}
        placeholder={'e.g.: He/She was diagnosed with...'}
      />
    </div>
  )
}

export default SectionOneParagraph
