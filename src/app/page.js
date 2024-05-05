import React from 'react'
import MainNavigation from './components/Navigation/MainNavigation'
import { openSans } from '@/utilities/fonts/fonts'
import TitleSection from './_homepage/TitleSection/TitleSection'
import SectionTwo from './_homepage/SectionTwo/SectionTwo'
import ClickHereToDonate from './_homepage/ClickHereToDonate/ClickHereToDonate'
import SectionThree from './_homepage/SectionThree/SectionThree'

const Homepage = () => {
  return (
    <div className={`${openSans.className} min-h-[2500px]`}>
      <MainNavigation />
      <TitleSection />
      <SectionTwo />
      <ClickHereToDonate />
      <SectionThree />
    </div>
  )
}

export default Homepage
