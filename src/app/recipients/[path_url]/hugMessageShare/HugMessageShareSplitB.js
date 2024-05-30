import Image from 'next/image'
import React from 'react'
import heartMessage from '../images/heart-message.png'
import HugButtonContainer from './HugButtonContainer'
import ShareButton from './ShareButton'
import ShareButtonSplitB from './ShareButtonSplitB'
import HugButtonContainerSplitB from './HugButtonContainerSplitB'

const HugMessageShareSplitB = ({
  parameters: {
    commentSectionRef,
    id,
    path_url,
    firstName,
    hugs,
    package_image,
    sub_title,
  },
}) => {
  const handleMessageLinkClick = () => {
    if (commentSectionRef.current) {
      commentSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }
  return (
    <div className="py-[9px] w-full bg-[#E0F3FF]">
      <div
        className={
          'md:px-6 lg:px-10 xl:px-0 flex py-[26px] border-t-[1px] border-b-[1px] border-white'
        }
      >
        <div
          className={
            'container flex flex-col md:flex-row items-center md:items-[unset] justify-start md:justify-center gap-4 md:gap-6 lg:gap-[55px]'
          }
        >
          {/* ******** HugButtonContainer ******** */}
          <HugButtonContainerSplitB parameters={{ id, hugs, path_url }} />
          <div
            onClick={handleMessageLinkClick}
            className={
              'flex rounded-[10px] shadow-custom2 border-[3px] border-primary pt-2 px-[15px] pb-[6px] justify-center items-center bg-white cursor-pointer w-[176px]'
            }
          >
            <div className={'flex items-center gap-[13px]'}>
              <p className={'text-[22px] font-mediumCond'}>Message</p>
              <Image src={heartMessage} alt="care icon" quality={100} />
            </div>
          </div>
          {/* ******** Share Modal ******** */}
          <ShareButtonSplitB
            parameters={{
              path_url,
              firstName,
              package_image,
              sub_title,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default HugMessageShareSplitB
