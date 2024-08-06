'use server'

import { createServer } from '@/config/supabase/supabaseServer'
import { revalidatePath } from 'next/cache'

export const addRecipient = async (data) => {
  const supabase = createServer()
  const { data: recipient, error } = await supabase
    .from('recipients')
    .insert([data])
    .select()
  if (recipient) {
    revalidatePath('/list-of-recipients')
    console.log('recipient', recipient)
    return { data: recipient, error: null }
  } else if (error) {
    console.log('error', error)
    return { data: null, error: error?.message }
  }
}
