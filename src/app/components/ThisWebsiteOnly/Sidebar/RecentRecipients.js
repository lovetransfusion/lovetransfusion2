'use client'
import { createClient } from '@/config/supabase/supabaseClient'
import multipleUseQuery from '@/queries/useQuery/multipleUseQuery'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentRecipients = () => {
  const supabase = createClient()
  const { data: recipients, error } = useQuery(
    multipleUseQuery({
      supabase,
      queryKey: ['recipients-sidebar'],
      table: 'recipients',
      select: 'first_name, path_url, category, profile_picture',
      limit: 5,
    })
  )
  if (!recipients) {
    return <h2>No recipient found</h2>
  }
  return (
    <div className="flex flex-col gap-5">
      {recipients?.map((recipient, i) => {
        const { first_name, path_url, category, profile_picture } = recipient
        return (
          <Link href={`/${path_url}`} key={i} className="group">
            <div className={'flex items-center lg:items-start gap-[15px]'}>
              <Image
                src={profile_picture?.url}
                width={75}
                height={75}
                quality={100}
                className="rounded-full"
                alt="receipient's profile picture"
              />
              <div className={'text-sm'}>
                <p className="group-hover:text-primary leading-[26px]">{`${first_name} is Battling ${category}`}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default RecentRecipients
