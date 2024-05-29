'use client'
import React, { useState } from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Icon_heart from '@/app/components/icons/Icon_heart'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import Textarea from '@/app/components/inputsFields/Textrea'
import Button from '@/app/components/Button'
import { useForm } from 'react-hook-form'
import { submitStory } from './actions'
import Toast from '@/app/components/Toast'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import UploadImages from './UploadImages'
import { createClient } from '@/config/supabase/supabaseClient'

const ClientSubmitStory = () => {
  const { register, handleSubmit, formState, reset } = useForm()
  const { errors } = formState
  const [toast, settoast] = useState(null)
  const [sending, setsending] = useState(false)
  const [messageSent, setmessageSent] = useState(false)
  const [uploadedImages, setuploadedImages] = useState(null)

  const uploadTheFiles = async (form) => {
    let imageUrls = []
    const uploadFile = async (file) => {
      const imageName = file?.path.replace(' ', '_').toLowerCase()
      const folrder = form?.recipientName.replace(' ', '_').toLowerCase()
      const supabase = createClient()
      const { data, error } = await supabase.storage
        .from('recipient_images')
        .upload(`${folrder}/${imageName}`, file, {
          cacheControl: '3600',
          upsert: false,
        })
      const imgUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`
      imageUrls.push(imgUrl)
    }

    for (const imgObj of uploadedImages) {
      await uploadFile(imgObj.file)
    }
    if (imageUrls?.length > 0) {
      const joinedImages =
        imageUrls?.length > 0
          ? imageUrls?.map((item) => item).join(', ')
          : imageUrls
      console.log({ uploadedImages, joinedImages, imageUrls })
      return joinedImages
    }
  }

  const onSubmit = async (formData) => {
    setsending(true)
    if (uploadedImages?.length <= 0) return
    const images = await uploadTheFiles(formData)
    const { data, error } = await submitStory({ formData, images })
    if (data) {
      settoast({
        description: 'We received your details.',
        status: 'success',
      })
      reset()
      setsending(false)
      setmessageSent(true)
    }
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
      setsending(false)
    }
  }
  return (
    <div className={`${openSans.className}`}>
      <Toast parameters={{ toast, settoast }} />
      <TitleSectionComponent>
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'text-[30px] max-sm:mx-auto md:text-[40px] font-semibold leading-[50px]'
            }
          >
            Share Your Story
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>Submit Story</p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <h3 className="text-primary text-[22px] leading-[25px] font-semibold mb-9 mt-[3px]">
          A New Way to Encourage and Support One Another
        </h3>
        <div className={'flex flex-col xl:flex-row gap-5'}>
          <div className={'xl:min-w-[626px] float-left'}>
            <div className={'relative pt-[56.25%]'}>
              <iframe
                width="100%"
                height="100%"
                className="absolute top-0 left-0 z-10"
                src="https://www.youtube.com/embed/tpbnp7ph3u4"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div
                className={'bg-black absolute top-0 left-0 w-full h-full'}
              ></div>
            </div>
            <div className={'flex items-center gap-1 justify-center mt-[14px]'}>
              <Icon_heart
                className={'text-primary size-[17px] hidden lg:block'}
              />
              <p className={'font-semibold text-primary'}>
                Love Transfusion, Inc. is a 501(c)(3) Nonprofit Organization ~
                Tax ID # 27-2829895
              </p>
            </div>
          </div>
          <div className={''}>
            <p className="font-semibold">TESTIMONIAL:</p>
            <p className={''}>
              “Spent some time this morning getting a clearer understanding
              about this Love Transfusion program. IT IS WONDERFUL!!! What a
              great idea! There is such a HUGE need for this… It’s a lonely and
              scary road out there for so many. What a HUGE difference this
              could make in so many lives.”
            </p>
            <p className={'text-[#808080] mt-[10px]'}>Debbie O.</p>
          </div>
        </div>
        <div className={'mt-[53px]'}>
          <p className={'text-[22px] font-semibold mb-[14px]'}>
            Why Share A Story?
          </p>
          <p className={''}>
            At Love Transfusion, we’ve found that by connecting people who hurt
            with those who care, the resulting expressions of love and support
            can help them significantly through their journey.
          </p>
          <p className={'mt-[15px]'}>
            If you are interested in sharing your (or a loved one’s) story with
            us, we will be glad to help raise awareness and provide the same
            type of support those in the video experienced. If you are not
            personally authorized to share the story, please send this page to a
            parent or guardian.
          </p>
        </div>
        {/*************** Form ***************/}
        <div
          className={'px-4 md:px-[60px] py-9 bg-[#E7F5FF] mt-10 rounded-[10px]'}
        >
          <h3 className="text-[26px] text-primary font-bold">Share a Story</h3>
          <p className={'mb-10 mt-[10px]'}>
            Please complete the form below to submit a story:
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex flex-col gap-[19px]'}>
              <div className={'flex flex-col md:flex-row gap-[18px]'}>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="fullName" className="font-semibold">
                    Your name:
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Please enter your full name"
                    className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                    {...register('fullName', {
                      required: 'Required',
                    })}
                    error={errors?.fullName?.message}
                  />
                </div>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="recipientName" className="font-semibold">
                    {"Recipient's Name:"}
                  </label>
                  <Input
                    id="recipientName"
                    name="recipientName"
                    placeholder="Who is this story about?"
                    className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                    {...register('recipientName', {
                      required: 'Required',
                    })}
                    error={errors?.recipientName?.message}
                  />
                </div>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="relationship" className="font-semibold">
                    What Is Your Relationship?
                  </label>
                  <Input
                    id="relationship"
                    name="relationship"
                    placeholder="(i.e. Self, Parent, Aunt, etc.)"
                    className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                    {...register('relationship', {
                      required: 'Required',
                    })}
                    error={errors?.relationship?.message}
                  />
                </div>
              </div>
              <div className={'w-full flex flex-col gap-[9px]'}>
                <label htmlFor="recipientSituation" className="font-semibold">
                  {"Description of the Recipient's situation:"}
                </label>
                <Textarea
                  rows="4"
                  id="recipientSituation"
                  name="recipientSituation"
                  placeholder="Only provide information we may share publicly."
                  className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                  {...register('recipientSituation', {
                    required: 'Required',
                  })}
                  error={errors?.recipientSituation?.message}
                />
              </div>
              <div className={'flex flex-col md:flex-row gap-[18px]'}>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="recipientInterests" className="font-semibold">
                    {"Recipient's Interests:"}
                  </label>
                  <Textarea
                    rows="4"
                    id="recipientInterests"
                    name="recipientInterests"
                    placeholder="What else would you like the Love Transfusion community to know about the Recipient? What are some of their interests, such as favorite color, subjects, movies?"
                    className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                    {...register('recipientInterests', {
                      required: "Recipient's interest is required",
                    })}
                    error={errors?.recipientInterests?.message}
                  />
                </div>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="otherPages" className="font-semibold">
                    Links to Other Pages:{' '}
                    <span className="text-[#6D6F6D]">(not required)</span>
                  </label>
                  <Textarea
                    rows="4"
                    id="otherPages"
                    name="otherPages"
                    placeholder="Only provide information we may share publicly."
                    className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                    {...register('otherPages')}
                  />
                </div>
              </div>
              <div className={'flex flex-col md:flex-row gap-[18px]'}>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="recipientPicture" className="font-semibold">
                    Picture of the Recipient:
                  </label>
                  <UploadImages setuploadedImages={setuploadedImages} />
                </div>
                <div className={'w-full flex flex-col gap-[9px]'}>
                  <label htmlFor="email" className="font-semibold">
                    Your Email Address:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Will remain private."
                    className="rounded-none border-[1px] border-primary placeholder:text-[#C4C6C9] placeholder:text-sm placeholder:focus:text-[#F1F1F2] py-3"
                    {...register('email', {
                      required: 'Enter your email address',
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                        message: 'Please enter a valid email',
                      },
                    })}
                    error={errors?.email?.message}
                  />
                </div>
              </div>
              <p className={'font-semibold mt-5'}>
                Please read the following terms carefully:
              </p>
              <ul className="list-disc pl-5">
                <li>I am over the age of 17.</li>
                <li>
                  If the information being submitted is for another person, I am
                  authorized to do so on their behalf.
                </li>
                <li>
                  I give Love Transfusion Inc. permission to share the story on
                  LoveTransfusion.com and social media.
                </li>
                <li>The information provided is true and accurate.</li>
              </ul>
              <p className={''}>
                By clicking the Submit Story button below I am agreeing to these
                terms.
              </p>
              <div
                className={'flex flex-col items-center gap-2 mt-10 pb-[29px]'}
              >
                {!messageSent && (
                  <Button
                    disabled={sending && true}
                    size="md"
                    className="relative text-base font-semibold"
                    type="submit"
                  >
                    {sending ? 'SUBMITTING' : 'SUBMIT STORY'}{' '}
                    {sending && (
                      <Icon_spinner className="animate-spin absolute right-7" />
                    )}
                  </Button>
                )}
                {messageSent && (
                  <p className={'py-[13px] text-green-500'}>
                    Successfully sent
                  </p>
                )}
                <p className={'text-[13px]'}>Protected by SSL Encryption</p>
              </div>
            </div>
          </form>
        </div>
      </ContentContainerWithSidebar>
    </div>
  )
}

export default ClientSubmitStory
