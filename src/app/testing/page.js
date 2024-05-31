import { getCurrentUser } from '@/config/supabase/getCurrentUser'

export default async function TestingVariant() {
  const user = await getCurrentUser()
  console.log('user', user)
  return (
    <div className={'container md:px-6 lg:px-10 xl:px-0 flex flex-col'}>
      <p className={''}>Your Role is {user?.role}</p>
    </div>
  )
}
