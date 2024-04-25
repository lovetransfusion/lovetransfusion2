import Image from 'next/image'
import React from 'react'
import profilePicLocal from '../images/profile-pic-placeholder2.png'
import heart from '../images/heart-proper.png'
import { twMerge } from 'tailwind-merge'

const ProfilePicture = ({
  profile_picture,
  notLCP,
  profileDiv,
  heartDiv,
  outerBorder,
}) => {
  return (
    <div className={`flex relative md:mt-9 lg:mt-0`}>
      <div
        className={twMerge(
          'flex rounded-full border-primary h-fit border-[7px] shadow-custom1',
          outerBorder
        )}
      >
        <div
          className={twMerge(
            'flex relative w-[236px] h-[241px] box-border rounded-full overflow-hidden border-white border-[5px]',
            profileDiv
          )}
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
            className="absolute top-0 object-cover"
          />
        </div>
      </div>
      <div
        className={twMerge(
          `flex absolute bottom-[-14px] right-[-10px] w-[107px] h-[108px]`,
          heartDiv
        )}
      >
        <Image src={heart} alt="love transfusion" priority={!notLCP && true} />
      </div>
    </div>
  )
}

export default ProfilePicture
