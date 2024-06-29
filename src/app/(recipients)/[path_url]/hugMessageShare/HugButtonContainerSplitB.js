import { LazyMotion } from 'framer-motion'
import React, { useState } from 'react'
import Hugbutton from './HugButton'
import dynamic from 'next/dynamic'
import HugbuttonSplitB from './HugButtonSplitB'

const HugModal = dynamic(() => import('./HugModal'))

const loadFeatures = () =>
  import('@/utilities/framerMotion/features').then((res) => res.default)

const HugButtonContainerSplitB = ({ parameters: { id, hugs, path_url } }) => {
  const [isModalActive, setisModalActive] = useState(null)
  return (
    <div className={'flex relative'}>
      {isModalActive && (
        <LazyMotion features={loadFeatures}>
          <HugModal parameters={{ isModalActive }} />
        </LazyMotion>
      )}
      <LazyMotion features={loadFeatures}>
        <HugbuttonSplitB
          parameters={{ id, hugs, path_url, setisModalActive }}
        />
      </LazyMotion>
    </div>
  )
}

export default HugButtonContainerSplitB
