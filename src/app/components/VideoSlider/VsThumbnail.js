import { Thumbnail } from '@vidstack/react'
import React from 'react'

const VsThumbnail = () => {
  return (
    <Thumbnail.Root
      src="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
      time={10}
      className="block h-[var(--thumbnail-height)] max-h-[160px] min-h-[80px] w-[var(--thumbnail-width)] min-w-[120px] max-w-[180px] overflow-hidden border border-white bg-black data-[hidden]:hidden"
    >
      <Thumbnail.Img />
    </Thumbnail.Root>
  )
}

export default VsThumbnail
