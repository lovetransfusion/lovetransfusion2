'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const signup = async (data) => {
  const { password, email } = data
  const supabase = createServer()
  let { data: user, error } = await supabase.auth.signUp({
    email,
    password,
  })
  console.log('user', user)
  if (error) {
    return error
  }
  revalidatePath('/', 'layout')
  redirect('/')
}
