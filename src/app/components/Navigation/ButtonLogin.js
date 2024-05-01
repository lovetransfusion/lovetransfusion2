import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import { createServer } from '@/config/supabase/supabaseServer'
import { logout } from '@/app/(auth)/signOut/actions'

const ButtonLogin = async () => {
  const supabase = createServer()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  console.log('user', user)
  return (
    <>
      {!user ? (
        <Link href={'/login'}>
          <Button>Login</Button>
        </Link>
      ) : (
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
