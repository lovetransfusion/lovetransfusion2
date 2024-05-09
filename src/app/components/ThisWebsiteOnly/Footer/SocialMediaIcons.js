import React from 'react'
import Icon_facebook2 from '../../icons/Icon_facebook2'
import Icon_twitterX from '../../icons/Icon_twitterX'
import Icon_youtube from '../../icons/Icon_youtube'
import Icon_rssfeed from '../../icons/Icon_rssfeed'
import Icon_vimeo from '../../icons/Icon_vimeo'
import Icon_pinterest from '../../icons/Icon_pinterest'
import Icon_instagram from '../../icons/Icon_instagram'
import Link from 'next/link'

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-1 mt-8">
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link target="_blank" href="https://www.facebook.com/LoveTransfusion">
          <Icon_facebook2 className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link target="_blank" href={'https://twitter.com/LoveTransfusion'}>
          <Icon_twitterX className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link target="_blank" href="https://youtube.com/lovetransfusion">
          <Icon_youtube className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          target="_blank"
          href="https://lovetransfusion.com/recipients/feed/"
        >
          <Icon_rssfeed className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link target="_blank" href="https://vimeo.com/lovetransfusion">
          <Icon_vimeo className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link target="_blank" href="https://www.pinterest.com/lovetransfusion/">
          <Icon_pinterest className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#E1E2E2] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link target="_blank" href="https://www.instagram.com/lovetransfusion/">
          <Icon_instagram className="text-[#676B6D] group-hover:text-white size-[14px]" />
        </Link>
      </div>
    </div>
  )
}

export default SocialMediaIcons
