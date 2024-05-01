'use server'
import { redirect } from 'next/navigation'
import { createServer } from './supabaseServer'

export const isAuthenticated = async (path) => {
  // Example path: "/login?next=dashboard/recipients"
  const supabase = createServer()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect(path)
  }
  return data?.user
}