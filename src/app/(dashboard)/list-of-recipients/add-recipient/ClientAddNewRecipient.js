'use client'
import React, { useEffect, useState } from 'react'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import { useForm } from 'react-hook-form'
import Button from '@/app/components/Button'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import AccordingToparagraph from './quill_inputs/AccordingToParagraph'
import SectionOneParagraph from './quill_inputs/SectionOneParagraph'
import MoreWaysToSupport from './MoreWaysToSupport'
import { addRecipient } from './actions'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import { formatPageDescription } from './formatPageDescription'
import Textarea from '@/app/components/inputsFields/Textrea'

const ClientAddNewRecipient = ({ parameters: { setpopup, user } }) => {
  // console.log('client rendered')
  const { register, handleSubmit, formState, watch } = useForm()
  const { settoast } = useStore(utilityStore)
  const [gender, setgender] = useState([])
  const [accordingTo, setaccordingTo] = useState(null)
  const [sectOneParagraph, setsectOneParagraph] = useState(null)
  const [waysToSupport, setwaysToSupport] = useState([])
  const [pageTitle, setpageTitle] = useState(null)
  const [pageDescription, setpageDescription] = useState(null)
  const [path_url, setpath_url] = useState(null)
  const { errors } = formState

  const first_name = watch('first_name')

  const items = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ]

  const onSubmit = async (unMergedData) => {
    if (!gender || !sectOneParagraph || !accordingTo || !path_url) {
      settoast({
        description: 'Please fill in the required fields.',
        status: 'error',
      })
      return
    }
    const data = {
      ...unMergedData,
      gender: gender[0]?.value,
      path_url: path_url?.toLowerCase()?.replaceAll(' ', '-'),
      according_to_paragraph: accordingTo,
      sec_one_paragraph: sectOneParagraph,
      more_ways_to_support: waysToSupport,
      opengraph: {
        title: pageTitle,
        description: pageDescription,
      },
    }
    const { data: recipient, error } = await addRecipient(data)
    if (recipient) {
      settoast({
        description: 'Successfully added new recipient',
        status: 'success',
      })
      setpopup(false)
    } else if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
  }

  const handlediscard = () => {
    setpopup(false)
  }

  useEffect(() => {
    setpageTitle(first_name)
    setpath_url(first_name)
  }, [first_name])

  useEffect(() => {
    setpageDescription(formatPageDescription(sectOneParagraph))
  }, [sectOneParagraph])

  const handleTitleChange = ({ target: { value } }) => {
    setpageTitle(value)
  }
  const handleDescriptionChange = ({ target: { value } }) => {
    setpageDescription(formatPageDescription(value))
  }
  const handlePathChange = ({ target: { value } }) => {
    setpath_url(value)
  }
  console.log('path_url', path_url)
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
                selectedItem: gender,
                setselectedItem: setgender,
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
            parameters={{ sectOneParagraph, setsectOneParagraph }}
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
          <div className="mt-5 border-neutral-300 border-[1px] px-5 py-6 rounded-md relative">
            <p className={'absolute left-5 -top-[14px] bg-white px-4'}>
              SEO Optimization:
            </p>
            <div className={'flex flex-col gap-4'}>
              <Input
                variant="input2"
                id="seo_title"
                value={
                  (first_name &&
                    `Welcome to ${capitalizeAllFirstLetter(
                      pageTitle
                    )}'s Page`) ||
                  (first_name &&
                    `Welcome to ${capitalizeAllFirstLetter(
                      first_name
                    )}'s Page`) ||
                  ''
                }
                onChange={handleTitleChange}
                placeholder="Page title"
              />
              <Textarea
                variant="textarea2"
                id="seo_description"
                value={
                  pageDescription ||
                  (sectOneParagraph &&
                    formatPageDescription(sectOneParagraph)) ||
                  ''
                }
                onChange={handleDescriptionChange}
                placeholder="Page description"
              />
              <div className={'flex items-center gap-[2px]'}>
                <p className={''}>https://www.lovetransfusion.org/</p>
                <Input
                  value={
                    path_url?.toLowerCase()?.replaceAll(' ', '-') ||
                    first_name?.toLowerCase()?.replaceAll(' ', '-') ||
                    ''
                  }
                  variant="input2"
                  id="path"
                  placeholder="auto-generated-path"
                  className="border-neutral-100 w-fit bg-neutral-50"
                  onChange={handlePathChange}
                />
              </div>
            </div>
          </div>
          <div className={'flex justify-between'}>
            <Button className="" variant="button2" onClick={handlediscard}>
              Exit & discard changes
            </Button>
            <Button type="submit">Save Recipient</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ClientAddNewRecipient
