'use server'
import { redirect } from 'next/navigation'
import { createServer } from './supabaseServer'

export const getCurrentUser = async (path) => {
  // Example path: "/login?next=dashboard/recipients"
  const supabase = createServer()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if ((error || !user) && path) {
    redirect(path || '/')
  }

  const { data, error: roleError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user?.id)
  if (data[0]) {
    return data[0]
  } else if (roleError) {
    console.log(roleError)
  }
}
