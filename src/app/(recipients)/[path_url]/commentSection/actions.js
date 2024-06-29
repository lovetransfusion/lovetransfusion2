'use server'
import { createServer } from '@/config/supabase/supabaseServer'
import { capitalize } from '@/utilities/capitalize'
import { revalidatePath } from 'next/cache'
import { v4 } from 'uuid'

export const addComment = async ({ data, id, path_url }) => {
  const supabase = createServer()
  const { data: currComments } = await supabase
    .from('recipients')
    .select('comments')
    .eq('id', id)

  if (currComments) {
    const comments = currComments[0].comments
    const commentId = v4()
    const dataWithId = { ...data, commentId }
    const newListOfComments = [...comments, dataWithId]
    const { data: newComments } = await supabase
      .from('recipients')
      .update({ comments: newListOfComments })
      .select()
      .eq('id', id)
    if (newComments) {
      revalidatePath(`/${path_url}`)
      revalidatePath(`/${capitalize(path_url)}`)
      return newComments
    }
  }
}
