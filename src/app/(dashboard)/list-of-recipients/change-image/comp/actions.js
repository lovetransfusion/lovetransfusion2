'use server'

import { createServer } from '@/config/supabase/supabaseServer'

export const updateRecipient = async ({ data, id }) => {
  const supabase = createServer()
  const { data: updatedRes, error } = await supabase
    .from('recipients')
    .update(data)
    .eq('id', id)
    .select()
  if (updatedRes) {
    return { data: updatedRes, error: null }
  } else {
    return { data: null, error: error?.message }
  }
}
