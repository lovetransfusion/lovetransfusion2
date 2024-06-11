'use server'
import { createServer } from './supabaseServer'

export const getCurrentUser = async () => {
  const supabase = createServer()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    console.log('There is an error', error)
  } else if (user) {
    return user
  }
}
