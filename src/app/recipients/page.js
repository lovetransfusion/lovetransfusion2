import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { createClient } from '@/config/supabase/supabaseClient'
import multipleUseQuery from '@/queries/useQuery/multipleUseQuery'
import ClientRecipientPage from './ClientRecipientPage'
import MainNavigation from '../components/ThisWebsiteOnly/Navigation/MainNavigation'

export const revalidate = 30

const RecipientsPage = async () => {
  const supabase = createClient()
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    multipleUseQuery({
      supabase: supabase,
      queryKey: ['recipients'],
      table: 'recipients',
      select: 'first_name, category, opengraph, path_url, profile_picture',
    })
  )
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientRecipientPage />
      </HydrationBoundary>
    </>
  )
}

export default RecipientsPage
