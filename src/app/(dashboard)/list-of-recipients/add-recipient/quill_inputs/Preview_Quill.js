import React from 'react'

const Preview_Quill = ({ data }) => {
  return (
    <div className={'w-full p-5'}>
      {data ? (
        <p
          className={''}
          dangerouslySetInnerHTML={{ __html: data }}
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
