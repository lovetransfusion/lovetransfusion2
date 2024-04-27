import React from 'react'

const VideoSection = ({ parameters: { setpopup } }) => {
  const handleClick = () => {
    setpopup('adCampaign')
  }
  return (
    <div className={'flex py-10'}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col gap-2 text-center items-center'
        }
      >
        <p className={'text-[28px] font-demiCond text-primary leading-[33px]'}>
          Short Video Explains How We Are Raising Awareness Of Benny’s Story
        </p>
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
