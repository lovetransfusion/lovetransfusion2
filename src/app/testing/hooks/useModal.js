/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'

const useModal = ({ reference }) => {
  const [yPosition, setyPosition] = useState(null)
  const [xPosition, setxPosition] = useState(null)

  console.log('rendered useModal')

  useEffect(() => {
    console.log('reference', reference)
    if (reference) {
      const viewportHeight = window.innerHeight

      if (viewportHeight - reference.top > viewportHeight / 2) {
        setyPosition('bottom')
      } else {
        setyPosition('top')
      }
    }
  }, [reference])

  return { yPosition, xPosition }
}

export default useModal
