import Image from 'next/image'
import React, { useState } from 'react'
import returnIcon from '../images/return-icon.svg'
import dynamic from 'next/dynamic'

const ShareModal = dynamic(() => import("./ShareModal"), { ssr: false })

const ShareButton = ({
  parameters: { path_url, firstName, package_image, sub_title },
}) => {
  const [isModalActive, setisModalActive] = useState(false)
  const handleMouseLeave = ({ e, data }) => {
    if (data === 'button') {
      setisModalActive(false)
    }
  }

  const handlebuttonHover = (e) => {
    e.stopPropagation()
    setisModalActive(true)
  }

  const handleClick = () => {
    console.log('handleClick')
    setisModalActive(() => !isModalActive)
  }
  const packageImage = package_image?.url
    ? `${package_image?.url}`
    : packageImageTemplate
  return (
    <div
      className={
        'flex rounded-[10px] shadow-custom2 border-2 border-primary pt-2 px-[15px] pb-[6px] justify-center items-center bg-white cursor-pointer w-[176px] relative'
      }
      onClick={(e) => handleClick(e)}
      onMouseOver={handlebuttonHover}
      onMouseLeave={(e) => handleMouseLeave({ e, data: 'button' })}
    >
      <div className={'flex items-center gap-[13px]'}>
        <p className={'text-[22px] font-mediumCond'}>Share page</p>
        <Image src={returnIcon} alt="care icon" quality={100} />
      </div>
      {isModalActive && (
        <div
          className="pb-[15px] absolute bottom-[49px] left-[-70px] md:left-[-30px]"
          onMouseLeave={handleMouseLeave}
        >
          <ShareModal
            parameters={{
              packageImage,
              path_url,
              firstName,
              sub_title,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ShareButton
