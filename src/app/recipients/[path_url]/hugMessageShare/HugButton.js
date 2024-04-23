import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CareIcon from '../images/care.svg'
import { m } from 'framer-motion'
import { checkIfHasHuggedBefore } from './checkIfHasHuggedBefore'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateHugs } from './actions'

const Hugbutton = ({
  parameters: { id, hugs: numberofHugs, path_url, setisModalActive },
}) => {
  const [buttonClick, setbuttonClick] = useState(false)

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => {
      updateHugs({ id, path_url })
    },
    onMutate: async () => {
      const mainKey = [`recipient - ${path_url}`]
      await queryClient.cancelQueries(mainKey)
      const prevQueryData = queryClient.getQueryData(mainKey)
      queryClient.setQueryData(mainKey, () => {
        const oldData = prevQueryData[0]
        const newData = [{ ...oldData, hugs: numberofHugs + 1 }]
        return newData
      })
      return prevQueryData
    },
  })

  const activateModal = () => {
    const timeout = setTimeout(() => {
      setisModalActive(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }

  const handleClick = async () => {
    const doesExist = checkIfHasHuggedBefore(path_url)
    if (!doesExist) {
      setbuttonClick(true)
      mutate()
    } else {
      setisModalActive(true)
      activateModal()
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setbuttonClick(false)
    }, 2000)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberofHugs])

  const hugSent = {
    initial: {
      y: '-10px',
      opacity: 100,
    },
    exit: {
      y: '-35px',
      opacity: 0,
      transition: {
        duration: 1.2,
      },
    },
  }

  console.log('buttonClick', buttonClick)
  return (
    <div>
      <div
        className={
          'flex rounded-[10px] shadow-custom2 border-2 border-primary pt-2 px-[15px] pb-[6px] justify-center items-center bg-white cursor-pointer w-[176px]'
        }
        onClick={handleClick}
      >
        <div className={'flex items-center gap-[13px] relative'}>
          <p className={'text-[22px] font-mediumCond'}>Hug</p>
          <Image src={CareIcon} alt="care icon" quality={100} />
          <p className={'text-[22px] font-mediumCond'}>{numberofHugs}</p>
          <m.div
            variants={hugSent}
            animate={!buttonClick ? 'initial' : 'exit'}
            className={`absolute top-[18px] font-mediumCond left-0 right-0 justify-center ${
              !buttonClick ? 'hidden' : 'flex'
            }`}
          >
            <p className={'text-center'}>Hug sent</p>
          </m.div>
        </div>
      </div>
    </div>
  )
}

export default Hugbutton
