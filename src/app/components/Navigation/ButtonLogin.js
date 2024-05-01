'use client'
import Link from 'next/link'
import Button from '../Button'
import { logout } from '@/app/(auth)/signOut/actions'
import { createClient } from '@/config/supabase/supabaseClient'
import { useEffect, useState } from 'react'

const ButtonLogin = () => {
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

  console.log('user', user)
  return (
    <>
      {/* Skeleton */}
      {user === undefined && (
        <Button className={'bg-gray-300 text-gray-300 animate-pulse'}>
          Login
        </Button>
      )}
      {/* Login */}
      {user === null && (
        <Link href={'/login'}>
          <Button>Login</Button>
        </Link>
      )}
      {/* Logout */}
      {user && (
        <form>
          <Button type="submit" formAction={logout}>
            Log out
          </Button>
        </form>
      )}
    </>
  )
}

export default ButtonLogin
