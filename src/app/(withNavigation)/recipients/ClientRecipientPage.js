'use client'
import Image from 'next/image'
import React from 'react'
import { createClient } from '@/config/supabase/supabaseClient'
import { useQuery } from '@tanstack/react-query'
import multipleUseQuery from '@/queries/useQuery/multipleUseQuery'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import profilePlaceholder from '@/app/images/profile_picture_placeholder.jpg'

const ClientRecipientPage = () => {
  const router = useRouter()
  const supabase = createClient()
  const { data: recipients, error } = useQuery(
    multipleUseQuery({
      supabase,
      queryKey: ['recipients'],
      table: 'recipients',
      select: 'first_name, category, opengraph, path_url, profile_picture',
    })
  )
  if (!recipients) {
    return <h2>No recipient found</h2>
  }
  if (error) console.log({ error })
  const handleAddCommentClick = (link) => {
    router.push(link)
  }
  return (
    <>
      <div className={'py-10'}>
        <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
          <div
            className={'grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}
          >
            {recipients
              ?.sort((a, b) => {
                const nameA = a.first_name.toLowerCase()
                const nameB = b.first_name.toLowerCase()
                if (nameA < nameB) return -1 // a comes before b
                if (nameA > nameB) return 1 // b comes before a
                return 0
              })
              .map((item, index) => {
                const {
                  first_name,
                  category,
                  path_url,
                  opengraph,
                  profile_picture,
                } = item
                return (
                  <Link key={index} href={`${path_url}`} prefetch>
                    <div
                      className={
                        'group flex flex-col gap-2 items-center pb-4 rounded-md overflow-hidden bg-neutral-100 shadow-md'
                      }
                    >
                      <div
                        className={
                          'relative w-full h-[250px] lg:h-[300px] overflow-hidden'
                        }
                      >
                        <Image
                          src={
                            profile_picture?.fullPath
                              ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${profile_picture?.fullPath}`
                              : profilePlaceholder
                          }
                          fill
                          placeholder="blur"
                          blurDataURL={profile_picture?.blurDataURL}
                          quality={100}
                          sizes="(max-width: 767px) 100vw, 100vw"
                          alt="recipient profile picture"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                      <div
                        className={'flex flex-col w-full gap-2 px-3 md:px-6'}
                      >
                        <p className={'text-xl'}>{first_name}</p>
                        <div
                          className={
                            'flex text-sm leading-5 gap-2 text-[#A7AAAc]'
                          }
                        >
                          <span>{category}</span>
                          <span>●</span>{' '}
                          <span
                            onClick={() =>
                              handleAddCommentClick(
                                `/${path_url}#comment-section`
                              )
                            }
                            className="hover:underline"
                          >
                            Leave a comment
                          </span>
                        </div>
                        <p className={'line-clamp-4'}>
                          {opengraph?.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientRecipientPage
