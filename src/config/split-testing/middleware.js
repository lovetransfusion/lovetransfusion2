import { NextResponse } from 'next/server'
import { getBucket } from '@/app/lib/ab-test'
import {
  RECIPIENT_VARIATION,
  TESTINGSSSS_VARIATION,
} from '@/app/lib/variations'
const ROUTES = {
  // Example
  '/this_will_be_the_pathname': {
    page: '/this_will_be_the_pathname',
    cookie: 'variation-pathname',
    variation: TESTINGSSSS_VARIATION,
  },
}

export const executeSplitTesting = (req) => {
  const { pathname, href } = req.nextUrl

  let route

  if (pathname.includes('/recipients/') && !href.includes('?variation')) {
    route = {
      page: pathname,
      cookie: 'variation-recipient',
      variation: RECIPIENT_VARIATION,
    }
  } else {
    route = ROUTES[pathname]
  }

  if (!route) return

  // Get the variation from the cookie
  let variation = req.cookies.get(route.cookie)
  let hasBucket = !!variation

  // Set a cookie if no activebucket or cookie invalid
  if (!variation || !route.variation.includes(variation?.value)) {
    variation = getBucket(route.variation)
    hasBucket = false
    const url = req.nextUrl.clone()
    url.search = new URLSearchParams({ variation })
    //Rewrite the response to Next
    const res = NextResponse.redirect(url)
    res.cookies.set({
      name: route.cookie,
      value: variation,
      path: '/',
    })
    return res
  }
  const url = req.nextUrl.clone()
  url.search = new URLSearchParams({ variation: variation?.value })
  // //Rewrite the response to Next
  const res = NextResponse.redirect(url)
  return res
}