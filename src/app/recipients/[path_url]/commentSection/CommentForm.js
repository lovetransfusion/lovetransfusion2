import React from 'react'
import { addComment } from './actions'
import Textarea from '@/app/components/inputsFields/Textrea'
import { useForm } from 'react-hook-form'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Button from '@/app/components/Button'
import { formatDateToUTCString } from '@/utilities/date-and-time/formatDateToUTCString'

const CommentForm = ({
  parameters: { id, path_url, listOfComments, setlistOfComments },
}) => {
  const { register, handleSubmit, formState, resetField } = useForm()
  const { errors } = formState

  const onSubmit = (comments) => {
    const date = formatDateToUTCString(new Date())
    const data = { ...comments, date }
    resetField('comment')
    resetField('name')
    resetField('email')
    setlistOfComments([...listOfComments, data])
    addComment({ data, id, path_url })
  }
  return (
    <div className={'flex flex-col'}>
      <p className={'font-mediumCond text-[#606060] text-[23px]'}>
        Leave a note of encouragement:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={'flex flex-col gap-4'}>
          <Textarea
            error={errors?.comment?.message}
            id="comment"
            placeholder="Comment*"
            {...register('comment', {
              required: 'Comment is required',
            })}
          />
          <div className={'flex gap-4 w-full'}>
            <div className="flex flex-col w-full">
              <Input
                id="name"
                error={errors?.name?.message}
                placeholder="Name*"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
              <p className="text-primary text-sm ml-4 mt-[5px]">
                Required fields are marked *
              </p>
            </div>
            <div className="flex flex-col w-full">
              <Input
                id="email"
                error={errors?.email?.message}
                placeholder="Email*"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    // eslint-disable-next-line no-useless-escape
                    value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              <p className="text-primary text-sm ml-4 mt-[5px]">
                Your email address will not be published.
              </p>
            </div>
          </div>
          <Button type="submit" className="max-w-[133px] mt-[33px]">
            Post comment
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
