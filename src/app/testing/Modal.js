/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react'
import useModal from './hooks/useModal'

const Modal = ({ show, onClose, referenceElement }) => {
  const reference = referenceElement?.current?.getBoundingClientRect()
  const modalRef = useRef(null)
  const { yPosition, xPosition } = useModal({ reference })

  console.log('rendered modal')

  // const [yPosition, setyPosition] = useState(null)
  // const [xPosition, setxPosition] = useState(null)
  // //   console.log('yPosition', yPosition)

  // useEffect(() => {
  //   console.log('reference', reference)
  //   if (reference) {
  //     const viewportHeight = window.innerHeight

  //     if (viewportHeight - reference.top > viewportHeight / 2) {
  //       setyPosition('bottom')
  //     } else {
  //       setyPosition('top')
  //     }
  //   }
  // }, [reference])

  // console.log('yPosition', yPosition)
  console.log('yPosition', yPosition)

  if (!show) {
    return null
  }

  return (
    <>
      <div
        ref={modalRef}
        className={`absolute z-20 bg-white border-[1px] border-[#ccc] shadow-md ${
          yPosition === 'top' ? 'top-[-40px]' : 'bottom-[-40px]'
        }`}
      >
        <div className="p-5">
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <p>Modal content goes here...</p>
        </div>
      </div>
    </>
  )
}

export default Modal
