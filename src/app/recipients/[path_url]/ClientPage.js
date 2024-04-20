'use client'
import { franklinGothicMediumCond } from '@/utilities/fonts/fonts'
import React from 'react'
import LogoSection from './logoSection/LogoSection'
import { useQuery } from '@tanstack/react-query'
import singleUseQuery from '@/hooks/useQuery/singleUseQuery'
import { createClient } from '@/config/supabase/supabaseClient'

const ClientPageRecipient = ({ parameters: { path_url } }) => {
  const supabase = createClient()
  const { data: recipient } = useQuery(
    singleUseQuery({
      queryKey: [`recipient - ${path_url}`],
      table: 'recipients',
      column: 'path_url',
      columnValue: path_url,
      supabase: supabase,
    })
  )
  console.log({ recipient })
  return (
    <div>
      <div>
        <LogoSection />
        {/* <div className={'flex gap-4 text-[14px]'}>
          <p className={''}>Childhood Cancer</p>
          <p className={'text-primary'}>Love Transfusion</p>
        </div>
        <h1 className={'font-mediumCond'}>Welcome to Benny’s Page!</h1> */}
      </div>
    </div>
  )
}

export default ClientPageRecipient
