'use client'
import React, { useEffect, useState } from 'react'
import { LazyMotion, m } from 'framer-motion'
import { updateOldRecipientHugs } from './actions'
import Icon_heart from '@/app/components/icons/Icon_heart'
import {
  checkIfHasHuggedBefore,
  checkLocalWithoutUpdating,
} from '@/app/(recipients)/[path_url]/hugMessageShare/checkIfHasHuggedBefore'
const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const Heart = ({ parameters: { recipient, id } }) => {
  const localKey = 'old-hug-list'
  const [itemExist, setitemExist] = useState(
    checkLocalWithoutUpdating({ localKey, id })
  )
  const [numberofHugs, setnumberofHugs] = useState(recipient?.hugs || 0)
  const [heartClicked, setheartClicked] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setheartClicked(false)
    }, 200)
    return () => clearTimeout(timeOut)
  }, [heartClicked])

  const handleClick = () => {
    if (!itemExist) setheartClicked(true)
    setitemExist(true)

    const doesExist = checkIfHasHuggedBefore({
      itemName: id,
      localKey,
    })
    if (!doesExist) {
      setnumberofHugs(numberofHugs + 1)
      updateOldRecipientHugs({ id })
    }
  }

  const scaleUp = {
    initial: {
      transform: 'scale(1)',
      opacity: 0,
    },
    animate: {
      transform: 'scale(2)',
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  }
  return (
    <div className="mb-[62px] w-fit ml-auto">
      <LazyMotion features={loadFeatures}>
        <div
          onClick={handleClick}
          className={`flex relative items-center gap-2 ${
            itemExist ? 'text-red-500' : 'text-[#AAB8C2]'
          } hover:text-red-500`}
        >
          <div className={'relative'}>
            <Icon_heart className="size-4" />
            <m.div
              variants={scaleUp}
              // initial={'initial'}
              animate={heartClicked ? 'animate' : 'initial'}
              className={
                'absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10 text-red-500'
              }
            >
              <Icon_heart className={`w-full h-full`} />
            </m.div>
          </div>
          <p className={''}>{numberofHugs}</p>
        </div>
      </LazyMotion>
    </div>
  )
}

export default Heart
