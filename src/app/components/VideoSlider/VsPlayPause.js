import { PlayButton } from '@vidstack/react'
import React from 'react'
import Icon_play from '../icons/Icon_play'
import Icon_pause from '../icons/Icon_pause'

const VsPlayPause = () => {
  return (
    <PlayButton className="group/playpause z-10 absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-white bg-primary bg-opacity-75 rounded-md w-[124px] h-[80px]">
      <Icon_play className="hidden group-data-[paused]/playpause:block mx-auto size-10" />
      <Icon_pause className="mx-auto size-10 group-data-[paused]/playpause:hidden" />
    </PlayButton>
  )
}

export default VsPlayPause
