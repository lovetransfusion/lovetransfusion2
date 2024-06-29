import Image from 'next/image'
import React from 'react'
import fbShare from '../images/fb-share-proper.png'
import linkedinShare from '../images/linkedin-share.png'
import twitterShare from '../images/twitter-share-proper.png'
import pinterestShare from '../images/pinterest-share-proper.png'
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from 'react-share'

const ShareModal = ({
  parameters: { packageImage, path_url, firstName, sub_title },
}) => {
  return (
    <div
      className={
        'flex bg-white shadow-custom2 border-4 border-primary rounded-[13px] min-w-[312px] pt-[3px] pb-[15px] cursor-default justify-center'
      }
    >
      <div
        className={
          'flex gap-[3px] flex-col relative items-center after:absolute after:bottom-[-26px] after:bg-white after:left-[120px] md:after:left-[55px] after:right-0 after:size-[17px] after:border-r-[4px] after:border-primary after:border-b-4 afer:bg-white after:rotate-45 after:z-20'
        }
      >
        <p className={'text-2xl font-mediumCond text-primary'}>
          Please Share With Your Friends
        </p>
        <div className={'flex gap-4'}>
          {/* ************** FacebookShareButton ************** */}
          <FacebookShareButton
            hashtag={`#help${firstName}`}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${path_url}`}
          >
            <div className="cursor-pointer shadow-custom3 rounded-[9px]">
              <Image
                src={fbShare}
                alt={'Facebook share icon'}
                width={40}
                quality={100}
              />
            </div>
          </FacebookShareButton>
          {/* ************** TwitterShareButton ************** */}
          <TwitterShareButton
            title={sub_title}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${path_url}`}
          >
            <div className="cursor-pointer shadow-custom3 rounded-[9px]">
              <Image
                src={twitterShare}
                alt={'Twitter share icon'}
                width={40}
                quality={100}
              />
            </div>
          </TwitterShareButton>
          {/* ************** PinterestShareButton ************** */}
          <PinterestShareButton
            media={packageImage}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${path_url}`}
          >
            <div className="cursor-pointer shadow-custom3 rounded-[9px]">
              <Image
                src={pinterestShare}
                alt={'Pinterest share icon'}
                width={40}
                quality={100}
              />
            </div>
          </PinterestShareButton>
          {/* ************** LinkedinShareButton ************** */}
          <LinkedinShareButton
            hashtag={`#help${firstName}`}
            url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${path_url}`}
          >
            <div className="cursor-pointer shadow-custom3 rounded-[9px]">
              <Image
                src={linkedinShare}
                alt={'LinkedIn share icon'}
                width={40}
                quality={100}
              />
            </div>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
