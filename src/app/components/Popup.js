import React, { useEffect } from 'react'
import Icon_close from './icons/Icon_close'

const Popup = ({ children, ...props }) => {
  const setBodyStyle = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = '15px'
  }
  const unsetBodyStyle = () => {
    document.body.style.overflow = ''
    document.body.style.marginRight = ''
  }

  console.log('children', children)
  useEffect(() => {
    setBodyStyle()
  }, [])

  const bgClose = (e) => {
    e.stopPropagation()
    if (!props.data?.bgNotClickable) {
      unsetBodyStyle()
      props.data?.setpopup(false)
    }
  }
  const handleClose = (e) => {
    e.stopPropagation()
    unsetBodyStyle()
    props.data?.setpopup(false)
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div
      className={
        'flex fixed py-4 md:py-10 px-2 top-0 w-full h-screen max-h-screen bg-neutral-500 bg-opacity-20 z-50 backdrop-blur-sm overflow-y-auto'
      }
      onClick={bgClose}
    >
      <div
        onClick={handleContentClick}
        className="flex my-auto relative min-h-20 w-full max-w-[552px] h-fit bg-white mx-auto rounded-md overflow-hidden shadow-xl"
      >
        <Icon_close
          onClick={handleClose}
          className={'absolute z-50 top-3 right-3 box-content'}
        />
        <div className={'flex w-full'}>{children}</div>
      </div>
    </div>
  )
}

export default Popup
