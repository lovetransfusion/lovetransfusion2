'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { cookies } from 'next/headers'

export const setuser = async () => {
  const supabase = createServer()
  const { data: user } = await supabase.auth.getUser()

  cookies().set({
    name: 'current-user',
    value: 'lee',
    httpOnly: true,
    path: '/',
  })
  console.log('userssss', user)
  return user
}
