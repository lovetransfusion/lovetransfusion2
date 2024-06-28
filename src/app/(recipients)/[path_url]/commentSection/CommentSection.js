import React, { useState } from 'react'
import ProfilePicture from '../profileSection/ProfilePicture'
import CommentForm from './CommentForm'
import Comments from './Comments'

const CommentSection = ({
  parameters: { profile_picture, id, comments, path_url },
}) => {
  const [listOfComments, setlistOfComments] = useState(comments)
  return (
    <div id="comment-section" className="bg-[#E0F3FF] pt-5 pb-[55px]">
      <div className={'flex pt-[39px] border-t-2 border-white w-full'}>
        <div className={'container md:px-6 lg:px-10 xl:px-0 flex '}>
          <div className={'flex max-w-[860px] mx-auto w-full flex-col'}>
            <div className={'flex justify-center'}>
              <ProfilePicture
                notLCP
                outerBorder={'border-[4px]'}
                heartDiv={'w-[68px] h-[69px]'}
                profileDiv={'w-[147px] h-[150px] border-[4px]'}
                profile_picture={profile_picture}
              />
            </div>
            <div
              className={
                'flex relative w-full justify-center border-t-2 border-primary mt-[33px] mb-10'
              }
            >
              <p
                className={
                  'bg-[#e0f3ff] px-[13px] absolute mx-auto top-[-25px] font-demiCond text-3xl text-primary'
                }
              >
                MESSAGES
              </p>
            </div>
            <CommentForm
              parameters={{
                path_url,
                id,
                listOfComments,
                setlistOfComments,
              }}
            />
            <div className={'mt-[15px]'}></div>
            <Comments listOfComments={listOfComments} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentSection
