import { NextResponse } from 'next/server'

import { createServer } from '@/config/supabase/supabaseServer'

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  const type = searchParams.get('type')
  const next = '/dashboard'

  // Create redirect link without the secret token
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token')
  redirectTo.searchParams.delete('type')

  if (token && type) {
    const supabase = createServer()
    const { error } = await supabase.auth.verifyOtp({
      type,
      token,
    })
    if (!error) {
      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}
