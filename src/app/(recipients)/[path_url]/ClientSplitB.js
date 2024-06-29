'use client'
import React, { Suspense, useRef, useState } from 'react'
import LogoSection from './logoSection/LogoSection'
import { useQuery } from '@tanstack/react-query'
import singleUseQuery from '@/queries/useQuery/singleUseQuery'
import { createClient } from '@/config/supabase/supabaseClient'
import { notFound } from 'next/navigation'
import ProfileSection from './profileSection/ProfileSection'
import WristHugSection from './wristHugSection/WristHugSection'
import CommentSection from './commentSection/CommentSection'
import dynamic from 'next/dynamic'
import VideoSection from './videoSection/VideoSection'
import LoadingComponent from '@/app/components/LoadingComponent'
import TitleSectionSplitB from './titleSection/TitleSectionSplitB'
import WhatIsSectionSplitB from './whatIsSection/WhatIsSectionSplitB'
import FifthSectionSplitB from './fifthSection/FifthSectionSplitB'
import TestimonialsSplitB from './testimonials/TestimonialsSplitB'
import DidYouKnowSplitB from './whatIsSection/DidYouKnowSplitB'
import FooterSplitB from './footer/FooterSplitB'
import HugMessageShareSplitB from './hugMessageShare/HugMessageShareSplitB'

const Popup = dynamic(() => import('@/app/components/Popup'))
const PaymentReceipt = dynamic(
  () => import('./popupContents/PaymentReceipt/PaymentReceipt'),
  {
    loading: () => <LoadingComponent className={'min-h-[910px]'} />,
  }
)
const AdCampaign = dynamic(
  () => import('./popupContents/adCampaign/AdCampaign'),
  {
    loading: () => <LoadingComponent className={'min-h-[620px]'} />,
  }
)

const ClientSplitB = ({ parameters: { path_url, variation } }) => {
  const supabase = createClient()
  const commentSectionRef = useRef()
  const [popup, setpopup] = useState(null)

  const { data: recipient } = useQuery(
    singleUseQuery({
      queryKey: [`recipient - ${path_url}`],
      table: 'recipients',
      column: 'path_url',
      columnValue: path_url,
      supabase: supabase,
    })
  )

  if (recipient?.length === 0) {
    return notFound()
  }

  const {
    id,
    first_name: firstName,
    sub_title,
    category,
    gender,
    sec_one_paragraph,
    according_to_paragraph,
    learn_more_url,
    learn_more_text,
    created_at,
    hugs,
    what_is,
    condition,
    profile_picture,
    package_image,
    more_ways_to_support,
    comments,
    end_of_campaign,
    opengraph,
  } = recipient[0]

  return (
    <div className="relative">
      <LogoSection />
      <TitleSectionSplitB parameters={{ firstName, category, created_at }} />
      <ProfileSection
        parameters={{
          profile_picture,
          firstName,
          sub_title,
          sec_one_paragraph,
          according_to_paragraph,
          gender,
        }}
      />
      <HugMessageShareSplitB
        parameters={{
          commentSectionRef,
          id,
          path_url,
          firstName,
          hugs,
          package_image,
          sub_title,
        }}
      />
      <WhatIsSectionSplitB
        parameters={{
          what_is,
          according_to_paragraph,
          learn_more_text,
          learn_more_url,
          more_ways_to_support,
          firstName,
        }}
      />
      <FifthSectionSplitB condition={condition} />
      <Suspense fallback={<></>}>
        <VideoSection parameters={{ setpopup, firstName }} />
      </Suspense>
      <TestimonialsSplitB />
      <WristHugSection />
      <DidYouKnowSplitB />
      <div ref={commentSectionRef}>
        <CommentSection
          parameters={{
            profile_picture,
            id,
            comments,
            path_url,
            end_of_campaign,
          }}
        />
      </div>
      <FooterSplitB />

      {popup === 'adCampaign' && (
        <Popup data={{ setpopup, bgNotClickable: true }}>
          <AdCampaign
            parameters={{ firstName, gender, package_image, variation }}
          />
        </Popup>
      )}
      {popup === 'paymentReceipt' && (
        <Popup data={{ setpopup }}>
          <PaymentReceipt parameters={{ firstName, path_url, opengraph }} />
        </Popup>
      )}
    </div>
  )
}

export default ClientSplitB
