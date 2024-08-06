'use client'
import { useState } from 'react'
import QuillEditor from '@/app/components/ReactQuill/QuillEditor'

const SectionOneParagraph = ({ parameters: { setsectOneParagraph } }) => {
  return (
    <div className={'flex flex-col gap-1 mb-2'}>
      <p className={''}>Section One Paragraph:</p>
      <QuillEditor
        setValue={setsectOneParagraph}
        placeholder={'e.g.: He/She was diagnosed with...'}
      />
    </div>
  )
}

export default SectionOneParagraph
