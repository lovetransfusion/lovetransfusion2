'use server'

import { createServer } from '@/config/supabase/supabaseServer'

export const addComment = async ({ comment, id }) => {
  const supabase = createServer()

  let { data: currComments, error: readError } = await supabase
    .from('oldRecipients')
    .select('comment')
    .eq('id', id)

  if (currComments[0]) {
    const { comment: currentComments } = currComments[0]
    const updatedComments = [...currentComments, comment]
    console.log('updatedComments', updatedComments)
    const { data, error } = await supabase
      .from('oldRecipients')
      .update([{ comment: updatedComments }])
      .eq('id', id)
      .select()
    console.log('data', data)
    if (error) return error
  } else if (readError) {
    console.log('readError', readError)
  }
}
