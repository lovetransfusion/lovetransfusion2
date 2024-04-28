import dynamic from 'next/dynamic'
// import WistiaPlayer from '@/app/components/WistiaPlayer'
// const WistiaPlayer = dynamic(() => import('@/app/components/WistiaPlayer'), {
//   ssr: false,
// })

// import Video from '@/app/components/Video'
const Video = dynamic(() => import('@/app/components/Video'), { ssr: false })

const VideoSection = ({ parameters: { setpopup } }) => {
  const handleClick = () => {
    setpopup('adCampaign')
  }
  return (
    <div className={'flex pt-20 pb-9'}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col gap-2 text-center items-center'
        }
      >
        <p
          className={
            'text-[28px] font-demiCond text-primary leading-[33px] mb-5'
          }
        >
          Short Video Explains How We Are Raising Awareness Of Benny’s Story
        </p>
        <Video />
        {/* <WistiaPlayer videoId="nx9htrqsu9" wrapper="video-1" /> */}
        <div
          onClick={handleClick}
          className={
            'flex bg-primary w-full md:w-[403px] text-2xl text-white font-demiCond mt-4 py-4 px-8 leading-[28px] justify-center hover:bg-primary-600 cursor-pointer transition-all duration-300'
          }
        >
          Click Here To See How You Can Help
        </div>
      </div>
    </div>
  )
}

export default VideoSection
