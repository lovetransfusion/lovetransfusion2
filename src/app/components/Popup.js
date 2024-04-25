import React, { useEffect, useRef } from 'react'
import Icon_close from './icons/Icon_close'

const Popup = ({ children, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const bgClose = (e) => {
    e.stopPropagation()
    if (!props.data?.bgNotClickable) {
      document.body.style.overflow = ''
      props.data?.setpopup(false)
    }
  }
  const handleClose = (e) => {
    e.stopPropagation()
    document.body.style.overflow = ''
    props.data?.setpopup(false)
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div
      className={
        'flex fixed py-4 md:py-10 px-2  top-0 w-full h-screen max-h-screen bg-black bg-opacity-25 z-50  overflow-y-scroll'
      }
      onClick={bgClose}
    >
      <div
        onClick={handleContentClick}
        className="flex relative min-w-[250px] min-h-20 max-w-[552px] h-fit bg-white mx-auto rounded-md"
      >
        <Icon_close
          onClick={handleClose}
          className={'absolute top-3 right-3 box-content'}
        />
        <div className={'flex w-full'}>{children}</div>
      </div>
    </div>
  )
}

export default Popup
