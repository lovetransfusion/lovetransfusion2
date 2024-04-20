'use client'
import { franklinGothicMediumCond } from '@/utilities/fonts/fonts'
import React from 'react'
import LogoSection from './logoSection/LogoSection'
import { useQuery } from '@tanstack/react-query'
import singleUseQuery from '@/hooks/useQuery/singleUseQuery'
import { createClient } from '@/config/supabase/supabaseClient'
import TitleSection from './titleSection/TitleSection'

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
    <div className="min-h-[2500px] bg-slate-400">
      <LogoSection />
      <TitleSection />
    </div>
  )
}

export default ClientPageRecipient
