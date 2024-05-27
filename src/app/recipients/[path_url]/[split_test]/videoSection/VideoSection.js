import dynamic from 'next/dynamic'
const WistiaPlayer = dynamic(() => import('@/app/components/WistiaPlayer'), {
  ssr: false,
})

const VideoSection = ({ parameters: { setpopup } }) => {
  const handleClick = () => {
    setpopup('adCampaign')
  }
  return (
    <div className={'flex pt-20 pb-[37px]'}>
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
        <WistiaPlayer
          videoId="nx9htrqsu9"
          wrapper="video-1"
          className={'shadow-custom1 mb-[17px] max-w-[960px]'}
        />
        <div
          onClick={handleClick}
          className={
            'flex bg-primary w-full md:w-[403px] text-2xl text-white font-demiCond py-4 px-8 leading-[28px] justify-center hover:bg-primary-600 cursor-pointer transition-all duration-300'
          }
        >
          Click Here To See How You Can Help
        </div>
      </div>
    </div>
  )
}

export default VideoSection
