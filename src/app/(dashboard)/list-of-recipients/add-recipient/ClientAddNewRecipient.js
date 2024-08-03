'use client'
import React, { useState } from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import { useForm } from 'react-hook-form'
import Button from '@/app/components/Button'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import AccordingToparagraph from './quill_inputs/AccordingToParagraph'
import SectionOneParagraph from './quill_inputs/SectionOneParagraph'
import MoreWaysToSupport from './MoreWaysToSupport'

const ClientAddNewRecipient = ({ parameters: { setpopup } }) => {
  // console.log('client rendered')
  const { register, handleSubmit, formState, watch } = useForm()
  const [selectedItem, setselectedItem] = useState([])
  const [accordingTo, setaccordingTo] = useState(null)
  const [sectOneParagrpah, setsectOneParagrpah] = useState(null)
  const [waysToSupport, setwaysToSupport] = useState([])
  const { errors } = formState

  console.log('waysToSupport', waysToSupport)

  const items = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ]

  const onSubmit = (unMergedData) => {
    const data = {
      ...unMergedData,
      gender: selectedItem[0]?.value,
      accordingTo,
      sectOneParagrpah,
      waysToSupport,
    }
    console.log('data', data)
  }

  const handlediscard = () => {
    setpopup(false)
  }
  return (
    <div className="px-5 py-10 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col md:flex-row gap-4'}>
            <Input
              variant="input2"
              id="first_name"
              placeholder="First name"
              {...register('first_name', {
                required: 'First name is required',
              })}
              error={errors?.first_name?.message}
            />
            <Input
              variant="input2"
              id="category"
              placeholder="Category"
              {...register('category', {
                required: 'Category is required',
              })}
              error={errors?.category?.message}
            />
          </div>
          <div className={'flex flex-col md:flex-row gap-4'}>
            <Select_Custom
              parameters={{
                options: items,
                selectedItem,
                setselectedItem,
                containerHeight: 132,
                menuStyle: 'rounded-md',
                placeholder: '-- Select Gender --',
                placeholderStyle: 'text-neutral-400',
              }}
              variant="select2"
              // className={'text-yellow-500'}
            />
            <Input
              variant="input2"
              id="condition"
              placeholder="Condition"
              {...register('condition', {
                required: 'Condition is required',
              })}
              error={errors?.condition?.message}
            />
          </div>
          <Input
            variant="input2"
            id="sub_title"
            placeholder="Subtitle"
            {...register('sub_title', {
              required: 'Subtitle is required',
            })}
            error={errors?.sub_title?.message}
          />
          <SectionOneParagraph
            parameters={{ sectOneParagrpah, setsectOneParagrpah }}
          />
          <Input
            variant="input2"
            id="what_is"
            placeholder="What What is <TOPIC>"
            {...register('what_is', {
              required: '"What is" is required',
            })}
            error={errors?.what_is?.message}
          />
          <AccordingToparagraph parameters={{ accordingTo, setaccordingTo }} />
          <div className={'flex flex-col md:flex-row gap-4'}>
            <Input
              variant="input2"
              id="learn_more_text"
              placeholder="Learn more <Text>"
              {...register('learn_more_text', {
                required: '"Learn more Text" is required',
              })}
              error={errors?.learn_more_text?.message}
            />
            <Input
              variant="input2"
              type="url"
              defaultValue="https://"
              id="learn_more_url"
              placeholder="Learn more <URL>"
              {...register('learn_more_url', {
                required: 'Learn more URL is required',
              })}
              error={errors?.learn_more_url?.message}
            />
          </div>
          <MoreWaysToSupport parameters={{ waysToSupport, setwaysToSupport }} />
          <div className={'flex justify-between'}>
            <Button className="" variant="button2" onClick={handlediscard}>
              Exit & discard changes
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ClientAddNewRecipient
