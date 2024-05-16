'use server'
import { capitalize } from '@/utilities/capitalize'
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
    const { data, error } = await supabase
      .from('oldRecipients')
      .update([{ comment: updatedComments }])
      .eq('id', id)
      .select()
    if (error) return error
  } else if (readError) {
    console.log('readError', readError)
  }
}

export const updateOldRecipientHugs = async ({ id }) => {
  const supabase = createServer()
  const { data: currHugs } = await supabase
    .from('oldRecipients')
    .select('hugs')
    .eq('id', id)

  if (currHugs) {
    const { hugs } = currHugs[0]
    const { data, error } = await supabase
      .from('oldRecipients')
      .update({ hugs: hugs + 1 })
      .select()
      .eq('id', id)

    if (data) {
      return data
    }
  }
}
