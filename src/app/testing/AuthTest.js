/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import React, { useEffect, useState } from 'react'

const AuthTest = () => {
  const [user, setuser] = useState(undefined)

  const getRole = async () => {
    const currentUser = await getCurrentUser()
    console.log('currentUser', currentUser?.role)
  }

  useEffect(() => {
    getRole()
  }, [])

  console.log('user', user)
  return (
    <div>
      <p className={''}>This is for admin only</p>
    </div>
  )
}

export default AuthTest
