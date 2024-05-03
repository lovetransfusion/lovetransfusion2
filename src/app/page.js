import React from 'react'
import MainNavigation from './components/Navigation/MainNavigation'
import { openSans } from '@/utilities/fonts/fonts'
import TitleSection from './(homepage)/TitleSection'

export const revalidate = 30

const Homepage = () => {
  return (
    <div className={`${openSans.className} bg-green-50 min-h-[2500px]`}>
      <MainNavigation />
      <TitleSection />
    </div>
  )
}

export default Homepage
