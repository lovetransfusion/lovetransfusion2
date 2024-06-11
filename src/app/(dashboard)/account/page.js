import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { cookies } from 'next/headers'
import React from 'react'

const AccountPage = async () => {
  const currentUser = await getCurrentUser()
  console.log('currentUser', currentUser)

  // const supabase = createServer()
  // const { data: payments } = await supabase
  //   .from('donations')
  //   .select('*')
  //   .eq('donor_email', currentUser?.email)
  console.log(
    'currentUser?.user_metadata?.email_verified',
    currentUser?.user_metadata?.email_verified
  )
  return (
    <div className={'w-full'}>
      <h2 className={'text-xl font-semibold text-primary'}>My Account</h2>
      <div className={'flex flex-col gap-2 my-5'}>
        <p className={''}>Email: {currentUser?.email}</p>
        <p className={''}>
          Verified: {currentUser?.user_metadata?.email_verified ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  )
}

export default AccountPage