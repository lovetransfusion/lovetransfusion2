import '@vidstack/react/player/styles/base.css'
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import {
  MediaPlayer,
  MediaProvider,
  FullscreenButton,
  SeekButton,
  Tooltip,
} from '@vidstack/react'
import Timeslider from './_VideoSlider/TimeSlider'
import VsTime from './_VideoSlider/Time'
import VsPlayPause from './_VideoSlider/VsPlayPause'

const Video = () => {
  return (
    <>
      <MediaPlayer
        title="Love Transfusion"
        src="/videos/ccc.m3u8"
        className="group"
      >
        <div className={'flex flex-col'}>
          <MediaProvider className="relative">
            <VsPlayPause />
          </MediaProvider>
          <div className={'flex divide-x-[1px] divide-primary'}>
            <SeekButton
              className="ring-sky-400 relative inline-flex cursor-pointer items-center justify-center px-2 outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 aria-hidden:hidden"
              seconds={-10}
            >
              Backward10
            </SeekButton>
            <SeekButton
              className="ring-sky-400 relative inline-flex cursor-pointer items-center justify-center px-2 outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 aria-hidden:hidden"
              seconds={10}
            >
              Forward10
            </SeekButton>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>button</Tooltip.Trigger>
              <Tooltip.Content
                className="animate-out fade-out slide-out-to-bottom-2 data-[visible]:animate-in data-[visible]:fade-in data-[visible]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white border border-gray-400/20"
                placement="top start"
              >
                content
              </Tooltip.Content>
            </Tooltip.Root>
            <FullscreenButton className="group px-2 ring-sky-400 relative inline-flex cursor-pointer items-center justify-center outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 aria-hidden:hidden">
              FullScreen
            </FullscreenButton>
          </div>
          {/* <VsThumbnail /> */}
          <VsTime />
          <Timeslider />
        </div>
      </MediaPlayer>
    </>
  )
}

export default Video
