import Image from 'next/image'
import React from 'react'
import profilePicLocal from '../images/profile-pic-placeholder2.png'
import heart from '../images/heart-proper.png'

const ProfilePicture = ({
  maxW,
  minW,
  logoW,
  logoH,
  borderW,
  outlineW,
  outlineOffset,
  bottom,
  right,
  profile_picture,
  imgW,
  imgH,
  notLCP,
}) => {
  return (
    <div className={`flex relative md:mt-9 lg:mt-0`}>
      <div
        className={
          'flex rounded-full border-primary h-fit border-[7px] shadow-customBlue'
        }
      >
        <div
          className={
            'flex relative w-[236px] h-[241px] box-border rounded-full overflow-hidden border-white border-[5px]'
          }
        >
          <Image
            src={
              profile_picture?.url ? `${profile_picture?.url}` : profilePicLocal
            }
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            alt="Picture of the recipient"
            priority={!notLCP && true}
            style={{ left: '-3px' }}
            className="absolute top-0 object-cover min-w-[231px] min-h-[231px]"
          />
        </div>
      </div>
      <div
        className={`flex absolute bottom-[-14px] right-[-10px] w-[107px] h-[108px]`}
      >
        <Image
          src={heart}
          alt="love transfusion"
          priority={!notLCP && true}
          className={`z-10 w-[${logoW || '107px'}] w-[${logoH || '108px'}]`}
        />
      </div>
    </div>
  )
}

export default ProfilePicture
