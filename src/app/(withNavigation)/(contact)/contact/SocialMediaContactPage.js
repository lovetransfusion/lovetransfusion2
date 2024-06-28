import React from 'react'
import Link from 'next/link'
import Icon_facebook2 from '@/app/components/icons/Icon_facebook2'
import Icon_twitterX from '@/app/components/icons/Icon_twitterX'
import Icon_youtube from '@/app/components/icons/Icon_youtube'
import Icon_rssfeed from '@/app/components/icons/Icon_rssfeed'
import Icon_vimeo from '@/app/components/icons/Icon_vimeo'
import Icon_pinterest from '@/app/components/icons/Icon_pinterest'
import Icon_instagram from '@/app/components/icons/Icon_instagram'
import Icon_youtube2 from '@/app/components/icons/Icon_youtube2'

const SocialMediaContactPage = () => {
  return (
    <div className="flex gap-1 mt-8">
      <div
        className={
          'group p-[6px] bg-[#A0A0A0] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          target="_blank"
          title="facebook page opens in a new window"
          href="https://www.facebook.com/LoveTransfusion"
        >
          <Icon_facebook2 className="text-white group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#A0A0A0] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          title="Twitter page opens in a new window"
          target="_blank"
          href={'https://twitter.com/LoveTransfusion'}
        >
          <Icon_twitterX className="text-white group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#A0A0A0] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          title="Instagram page opens in a new window"
          target="_blank"
          href="https://www.instagram.com/lovetransfusion/"
        >
          <Icon_instagram className="text-white group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#A0A0A0] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          title="Youtube page opens in a new window"
          target="_blank"
          href="https://youtube.com/lovetransfusion"
        >
          <Icon_youtube2 className="text-white group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#A0A0A0] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          title="Vimeo page opens in a new window"
          target="_blank"
          href="https://vimeo.com/lovetransfusion"
        >
          <Icon_vimeo className="text-white group-hover:text-white size-[14px]" />
        </Link>
      </div>
      <div
        className={
          'group p-[6px] bg-[#A0A0A0] hover:bg-primary cursor-pointer w-fit h-fit rounded-full'
        }
      >
        <Link
          title="Pinterest page opens in a new window"
          target="_blank"
          href="https://www.pinterest.com/lovetransfusion/"
        >
          <Icon_pinterest className="text-white group-hover:text-white size-[14px]" />
        </Link>
      </div>
    </div>
  )
}

export default SocialMediaContactPage
