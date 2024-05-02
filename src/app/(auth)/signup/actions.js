'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signup(data) {
  const supabase = createServer()
  const { email, password } = data

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/callback`,
    },
  })

  if (error) {
    return error
  }

  revalidatePath('/', 'layout')
  redirect(`/confirm-signup/?email=${email}`)
}
