'use client'
import { useRouter } from 'next/navigation'
import { createClient } from './supabaseClient'
import { createContext, useState, useEffect, useContext } from 'react'

const Context = createContext(undefined)

export const SupabaseProvider = ({ children }) => {
  const router = useRouter()
  const [supabase] = useState(() => createClient())

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh()
    })
    return () => {
      subscription.unsubscribe
    }
  }, [supabase, router])

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)
  const { supabase } = context

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return supabase
}
