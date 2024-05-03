import React from 'react'
import MainNavigation from './components/Navigation/MainNavigation'
import { openSans } from '@/utilities/fonts/fonts'
import TitleSection from './(homepage)/TitleSection/TitleSection'
import SectionTwo from './(homepage)/SectionTwo/SectionTwo'

const Homepage = () => {
  return (
    <div className={`${openSans.className} min-h-[2500px]`}>
      <MainNavigation />
      <TitleSection />
      <SectionTwo />
    </div>
  )
}

export default Homepage
