/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useRef, useState } from 'react'
import Modal from './Modal'
import Button from '../components/Button'

export default function TestingVariant() {
  const [showModal, setShowModal] = useState(false)
  const buttonRef = useRef(null)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0'}>
      <div className={'h-[700px]'}></div>
      <div className={'relative'}>
        <Button ref={buttonRef} onClick={handleToggleModal}>
          Toggle Modal
        </Button>
        <Modal
          show={showModal}
          onClose={handleToggleModal}
          referenceElement={buttonRef}
        />
      </div>
      <div className={'h-[1000px]'}></div>
    </div>
  )
}
