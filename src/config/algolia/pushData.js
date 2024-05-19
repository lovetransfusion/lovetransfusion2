'use server'
import { createServer } from '../supabase/supabaseServer'
import { searchClient } from './searchClient'

const index = searchClient.initIndex('prod_pages')

export const pushData = async (data) => {
  try {
    await index.saveObjects(data, {
      autoGenerateObjectIDIfNotExist: true,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

export const pushSupabaseData = async () => {
  try {
    const supabase = createServer()
    const { data: recipients, error } = await supabase
      .from('recipients')
      .select('*')

    const updatedRecipients = recipients?.map((item) => {
      const newPath = `recipients/${item?.path_url}`
      return { ...item, path_url: newPath, objectID: item?.path_url }
    })

    await index.saveObjects(updatedRecipients, {
      autoGenerateObjectIDIfNotExist: true,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
