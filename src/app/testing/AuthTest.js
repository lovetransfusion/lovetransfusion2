'use client'
import { createClient } from '@/config/supabase/supabaseClient'
import React, { useEffect, useState } from 'react'

const AuthTest = () => {
  const [user, setuser] = useState(undefined)

  const getUser = async () => {
    const supabase = createClient()
    const {
      data: { user: theUser },
      error,
    } = await supabase.auth.getUser()
    if (theUser) {
      setuser(theUser)
    } else {
      return setuser(null)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  console.log({ user })
  return <div></div>
}

export default AuthTest
