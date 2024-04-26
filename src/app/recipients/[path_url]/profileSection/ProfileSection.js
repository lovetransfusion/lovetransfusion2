import IconCheck from '@/app/components/icons/Icon_check'
import { capitalize } from '@/utilities/capitalize'
import { franklinGothicBookItalic } from '@/utilities/fonts/fonts'
import React from 'react'
import ProfilePicture from './ProfilePicture'

const ProfileSection = ({
  parameters: {
    profile_picture,
    firstName,
    sub_title,
    sec_one_paragraph,
    gender,
  },
}) => {
  const capitalizeName = capitalize(firstName)
  return (
    <div className={'flex pb-[23px]'}>
      <div
        className={
          'flex flex-col text-xl max-w-[984px] mx-auto w-full px-[12px] md:px-6 lg:px-10 xl:px-0 '
        }
      >
        {/* ******** Verified ******** */}
        <div className={'relative w-full hidden md:flex md:items-center'}>
          <div
            className={
              'flex items-center gap-[2px] absolute right-[17px] top-[-19px]'
            }
          >
            <IconCheck className={'fill-primary'} />
            <p className={'text-primary mt-[-2px] font-mediumCond'}>VERIFIED</p>
          </div>
        </div>

        <div className={'flex pt-[19px] gap-[10px] flex-wrap md:flex-nowrap'}>
          <div className={'flex justify-center h-fit mx-auto'}>
            <ProfilePicture profile_picture={profile_picture} />
          </div>
          <div className={'flex flex-col gap-[22px] pt-5 pl-0 md:pl-5'}>
            <p className={'text-[28px] font-mediumCond leading-[33px]'}>
              {sub_title}
            </p>
            <div
              className={'quill leading-[22px] pr-0 md:pr-[10px]'}
              dangerouslySetInnerHTML={{ __html: sec_one_paragraph }}
            ></div>
            <p
              className={`leading-[22px] ${franklinGothicBookItalic.className}`}
            >{`Please let ${capitalizeName} know ${
              gender.toLowerCase() === 'female' ? 'she' : 'he'
            } is in your thoughts…`}</p>
          </div>
        </div>

        <div className={'flex justify-center pt-[35px] leading-[33px]'}>
          <p
            className={
              'text-[27px] text-center font-mediumCond text-primary mt-[3px]'
            }
          >
            Click Any of The Options Below To Show You Care:
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
