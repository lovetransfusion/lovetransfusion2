'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const setuser = async () => {
  const supabase = createServer()
  const { data, error } = await supabase.auth.getUser()
  if (data) {
    const { user } = data
    cookies().set({
      name: 'current-user',
      value: JSON.stringify(user),
      httpOnly: true,
      path: '/',
    })
    return user
  } else if (error) {
    console.log('error', error)
  }
}

export async function login({ data, redirectTo }) {
  const { email, password } = data
  const supabase = createServer()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    return error.message
  }

  await setuser()

  revalidatePath('/', 'layout')
  redirect(redirectTo ? `/${redirectTo}` : '/dashboard')
}
