'use client'
import React, { useRef, useState } from 'react'
import LogoSection from './logoSection/LogoSection'
import { useQuery } from '@tanstack/react-query'
import singleUseQuery from '@/queries/useQuery/singleUseQuery'
import { createClient } from '@/config/supabase/supabaseClient'
import TitleSection from './titleSection/TitleSection'
import { notFound } from 'next/navigation'
import ProfileSection from './profileSection/ProfileSection'
import HugMessageShare from './hugMessageShare/HugMessageShare'
import PackageSection from './packageSection/PackageSection'
import FifthSection from './fifthSection/FifthSection'
import Testimonials from './testimonials/Testimonials'
import WristHugSection from './wristHugSection/WristHugSection'
import WhatIsSection from './whatIsSection/WhatIsSection'
import Footer from './footer/Footer'
import CommentSection from './commentSection/CommentSection'
import dynamic from 'next/dynamic'
import VideoSection from './videoSection/VideoSection'
import LoadingForm from './popupContents/LoadingForm'

const Popup = dynamic(() => import('@/app/components/Popup'))
const CarePackage = dynamic(
  () => import('./popupContents/carePackage/CarePackage'),
  {
    loading: () => <LoadingForm />,
  }
)
const AdCampaign = dynamic(
  () => import('./popupContents/adCampaign/AdCampaign'),
  {
    loading: () => <LoadingForm />,
  }
)

const ClientPageRecipient = ({ parameters: { path_url } }) => {
  console.log('recipient rendered')
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
    poster_image,
    more_ways_to_support,
    comments,
    end_of_campaign,
    opengraph,
  } = recipient[0]
  return (
    <div className="relative">
      <LogoSection />
      <TitleSection parameters={{ firstName, category, created_at }} />
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
      <HugMessageShare
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
      <PackageSection
        parameters={{
          id,
          path_url,
          firstName,
          condition,
          poster_image,
          package_image,
          end_of_campaign,
          opengraph,
          setpopup,
        }}
      />
      <FifthSection condition={condition} />
      <VideoSection parameters={{ setpopup }} />
      <Testimonials />
      <WristHugSection />
      <WhatIsSection
        parameters={{
          what_is,
          according_to_paragraph,
          learn_more_text,
          learn_more_url,
          more_ways_to_support,
          firstName,
        }}
      />
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
      <Footer />
      {popup === 'carePackage' && (
        <Popup data={{ setpopup, bgNotClickable: true }}>
          <CarePackage parameters={{ firstName, package_image }} />
        </Popup>
      )}
      {popup === 'adCampaign' && (
        <Popup data={{ setpopup, bgNotClickable: false }}>
          <AdCampaign parameters={{ firstName, gender, package_image }} />
        </Popup>
      )}
    </div>
  )
}

export default ClientPageRecipient
