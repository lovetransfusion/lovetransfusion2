import { NextResponse } from 'next/server'
import { getBucket } from './app/lib/ab-test'
import { RECIPIENT_BUCKETS, TESTING_BUCKETS } from './app/lib/buckets'
import { updateSession } from './config/supabase/middleware'

const ROUTES = {
  '/testing': {
    page: '/testing',
    cookie: 'bucket-testing',
    buckets: TESTING_BUCKETS,
  },
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

export async function middleware(req) {
  const executeSplitTesting = () => {
    const { pathname } = req.nextUrl

    let route

    if (pathname.includes('/recipients/')) {
      route = {
        page: pathname,
        cookie: 'bucket-recipient',
        buckets: RECIPIENT_BUCKETS,
      }
    } else {
      route = ROUTES[pathname]
    }

    if (!route) return

    // Get the bucket from the cookie
    let bucket = req.cookies.get(route.cookie)
    let hasBucket = !!bucket

    console.log('bucket', bucket)

    // Set a cookie if no activebucket or cookie invalid
    if (!bucket || !route.buckets.includes(bucket?.value)) {
      bucket = getBucket(route.buckets)
      hasBucket = false

      const url = req.nextUrl.clone()
      url.pathname = `${route.page}/${bucket}`
      //Rewrite the response to Next
      const res = NextResponse.rewrite(url, {
        headers: { 'Set-Cookie': `${route.cookie}=${bucket}; path=/;` },
      })
      console.log('res', res)
      return res
    }
    const url = req.nextUrl.clone()
    url.pathname = `${route.page}/${bucket?.value}`
    //Rewrite the response to Next
    const res = NextResponse.rewrite(url)
    console.log('res', res)
    return res
  }

  return executeSplitTesting()
  // update user's auth session
  // await updateSession(req)
}
