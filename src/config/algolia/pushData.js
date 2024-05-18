'use server'
import algoliasearch from 'algoliasearch'
import { createServer } from '../supabase/supabaseServer'

const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API
)

const index = client.initIndex('prod_recipients')

export const pushData = async () => {
  try {
    const supabase = createServer()
    const { data: recipients, error } = await supabase
      .from('recipients')
      .select('*')

    await index.saveObjects(recipients, {
      autoGenerateObjectIDIfNotExist: true,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
