'use client'
import { useForm } from 'react-hook-form'
import { addComment } from './actions'
import Button from '@/app/components/Button'
import Checkbox from '@/app/components/inputsFields/Checkbox'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Textarea from '@/app/components/inputsFields/Textrea'

const CommentForm = ({ parameters: { comments, setcomments, id } }) => {
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
    </div>
  )
}

export default CommentForm
