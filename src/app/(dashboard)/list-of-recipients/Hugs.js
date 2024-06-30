/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Icon_like from '@/app/components/icons/Icon_like'
import { updateHugs } from '@/app/(recipients)/[path_url]/hugMessageShare/actions'
import {
  checkIfHasHuggedBefore,
  checkLocalWithoutUpdating,
} from '@/app/(recipients)/[path_url]/hugMessageShare/checkIfHasHuggedBefore'
import React, { useEffect, useState } from 'react'

const Hugs = ({ parameters: { hugs: currHugs, path_url, id } }) => {
  const [doesExist, setdoesExist] = useState(null)
  const [hugs, sethugs] = useState(currHugs)
  const checkLocalData = async () => {
    const exist = checkLocalWithoutUpdating({
      id: path_url,
      localKey: 'hugs-list',
    })
    setdoesExist(exist)
  }

  const handleClick = () => {
    if (!doesExist) {
      checkIfHasHuggedBefore({
        itemName: path_url,
        localKey: 'hugs-list',
      })
      setdoesExist(true)
      sethugs(hugs + 1)
      updateHugs({ id, path_url })
    }
  }

  useEffect(() => {
    checkLocalData()
  }, [])
  return (
    <div className={`flex items-center gap-3 select-none w-fit ${!doesExist && 'cursor-pointer'}`} onClick={handleClick}>
      <Icon_like
        
        className={`size-6 ${
          doesExist ? 'text-primary' : 'text-neutral-300'
        }`}
      />
      <p className={''}>{hugs}</p>
    </div>
  )
}

export default Hugs
