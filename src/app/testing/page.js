import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import AuthTest from './AuthTest'

const TestingVariant = async () => {
  const user = await getCurrentUser('/login?next=testing')
  console.log('user', user)
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
      {/* <AuthTest /> */}
    </div>
  )
}

export default TestingVariant
