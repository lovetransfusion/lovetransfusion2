'use client'
import Textarea from '../components/inputsFields/Textrea'
import Input from '../components/inputsFields/InputGroup/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import { addComment } from './actions'
import Checkbox from '../components/inputsFields/Checkbox'
import { createClient } from '@/config/supabase/supabaseClient'
import { useEffect, useState } from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import Comments from './Comments'

const CommentSection = ({ id }) => {
  const [comments, setcomments] = useState(null)
  console.log('comments', comments)
  const { register, handleSubmit, formState } = useForm({
    defaultValues: async () => {
      const localData = JSON.parse(localStorage.getItem('oldRecipientComment'))
      return {
        name: localData?.myLocalData?.name,
        email: localData?.myLocalData?.email,
        saveMyData: localData?.myLocalData?.saveMyData,
      }
    },
  })
  const { errors } = formState
  const supabase = createClient()

  const fetchComments = async () => {
    const { data: currComments, error: readError } = await supabase
      .from('oldRecipients')
      .select('comment, created_at')
      .eq('id', id)
    if (currComments) {
      const theComments = currComments[0]
      setcomments(theComments?.comment)
    }
  }

  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (data) => {
    const updatedComment = { ...data, date: new Date() }
    setcomments([...comments, updatedComment])
    if (data?.saveMyData) {
      const { comment, website, ...myLocalData } = data
      localStorage.setItem(
        'oldRecipientComment',
        JSON.stringify({ myLocalData })
      )
    } else {
      console.log('removing local data')
      localStorage.removeItem('oldRecipientComment')
    }
    const { saveMyData, ...newComment } = data

    addComment({ comment: updatedComment, newComment, id })
  }

  return (
    <div className="">
      <h3 className={'text-[22px] font-semibold mb-[31px]'}>Leave a Reply</h3>
      <p className={'text-[13px] mb-[14px]'}>
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-[10px]'}>
          <Textarea
            error={errors?.comment?.message}
            id="comment"
            placeholder="Comment*"
            className="mb-[5px] text-sm rounded-none border-[#E4E5E7] bg-[#FCFCFC] placeholder:text-sm placeholder:text-[#BABDC1] placeholder:focus:text-[#EBECED]"
            {...register('comment', {
              required: 'Comment is required',
            })}
          />
          <Input
            id="name"
            error={errors?.name?.message}
            placeholder="Name*"
            // defaultValue={savedData?.name}
            className="text-sm rounded-none border-[#E4E5E7] bg-[#FCFCFC] placeholder:text-sm placeholder:text-[#BABDC1] placeholder:focus:text-[#EBECED]"
            {...register('name', {
              required: 'Enter your name',
            })}
          />
          <Input
            id="email"
            error={errors?.email?.message}
            placeholder="Email*"
            // defaultValue={savedData?.email}
            className="text-sm rounded-none border-[#E4E5E7] bg-[#FCFCFC] placeholder:text-sm placeholder:text-[#BABDC1] placeholder:focus:text-[#EBECED]"
            {...register('email', {
              required: 'Enter your email address',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                message: 'Please enter a valid email',
              },
            })}
          />
          <Input
            error={errors?.website?.message}
            id="website"
            placeholder="Website"
            className="text-sm rounded-none border-[#E4E5E7] bg-[#FCFCFC] placeholder:text-sm placeholder:text-[#BABDC1] placeholder:focus:text-[#EBECED]"
            {...register('website')}
          />
          <div className={'mt-[11px] mb-[9px]'}>
            <Checkbox
              id="saveMyData"
              //   checked={savedData?.saveMyData}
              {...register('saveMyData')}
              className="text-[13px]"
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </Checkbox>
          </div>
          <Button type="submit">Post comment</Button>
        </div>
      </form>
      <div className={'mt-6'}>
        {comments ? (
          <Comments listOfComments={comments} />
        ) : (
          <div
            className={
              'flex animate-pulse shadow-sm rounded-md bg-gray-50 px-[15px] py-5'
            }
          >
            <div className={'flex gap-5'}>
              <div className={'bg-gray-300 size-[45px] rounded-full '}></div>
              <div className={'flex flex-col gap-2 justify-center'}>
                <div className={'w-[280px] h-2 bg-gray-300'}></div>
                <div className={'w-[200px] h-2 bg-gray-300'}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentSection
