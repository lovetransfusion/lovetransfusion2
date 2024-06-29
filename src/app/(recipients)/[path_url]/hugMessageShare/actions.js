'use server'
import { createServer } from '@/config/supabase/supabaseServer'
// import { capitalize } from '@/utilities/capitalize'
import { revalidatePath } from 'next/cache'

export const updateHugs = async ({ id, path_url }) => {
  const supabase = createServer()
  const { data: currHugs } = await supabase
    .from('recipients')
    .select('hugs, first_name')
    .eq('id', id)

  if (currHugs) {
    const { hugs } = currHugs[0]
    const { data, error } = await supabase
      .from('recipients')
      .update({ hugs: hugs + 1 })
      .select()
      .eq('id', id)

    if (data) {
      revalidatePath('/', 'layout')
      return data
    }
  }
}