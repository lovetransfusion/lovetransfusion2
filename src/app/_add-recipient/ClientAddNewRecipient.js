'use client'
import React, { useState } from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import { useForm } from 'react-hook-form'
import Button from '@/app/components/Button'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import AccordingToparagraph from './quill_inputs/AccordingToParagraph'

const ClientAddNewRecipient = () => {
  console.log('client rendered')
  const { register, handleSubmit, formState, watch } = useForm()
  const [selectedItem, setselectedItem] = useState([])
  const { errors } = formState

  const items = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ]

  const onSubmit = (unMergedData) => {
    const data = { ...unMergedData, gender: selectedItem[0]?.value }
    console.log('data', data)
  }
  return (
    <div className="py-10">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-4'}>
            <div className={'flex flex-col md:flex-row gap-4'}>
              <Input
                id="first_name"
                placeholder="First name"
                {...register('first_name', {
                  required: 'First name is required',
                })}
                error={errors?.first_name?.message}
              />
              <Input
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
                }}
              />
              <Input
                id="condition"
                placeholder="Condition"
                {...register('condition', {
                  required: 'Condition is required',
                })}
                error={errors?.condition?.message}
              />
            </div>
            <Input
              id="sub_title"
              placeholder="Subtitle"
              {...register('sub_title', {
                required: 'Subtitle is required',
              })}
              error={errors?.sub_title?.message}
            />
            <Input
              id="what_is"
              placeholder="What What is <TOPIC>"
              {...register('what_is', {
                required: '"What is" is required',
              })}
              error={errors?.what_is?.message}
            />
            <AccordingToparagraph />
            <div className={'flex flex-col md:flex-row gap-4'}>
              <Input
                id="learn_more_text"
                placeholder="Learn more <Text>"
                {...register('learn_more_text', {
                  required: '"Learn more Text" is required',
                })}
                error={errors?.learn_more_text?.message}
              />
              <Input
                id="learn_more_url"
                placeholder="Learn more <URL>"
                {...register('learn_more_url', {
                  required: 'Learn more URL is required',
                })}
                error={errors?.learn_more_url?.message}
              />
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClientAddNewRecipient
