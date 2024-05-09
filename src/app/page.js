import React from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import TitleSection from './_homepage/TitleSection/TitleSection'
import SectionTwo from './_homepage/SectionTwo/SectionTwo'
import ClickHereToDonate from './_homepage/ClickHereToDonate/ClickHereToDonate'
import SectionThree from './_homepage/SectionThree/SectionThree'
import RecentRecipients from './_homepage/recentRecipients/RecentRecipients'
import Testimonials from './_homepage/testimonials/Testimonials'
import SectionFour from './_homepage/SectionFour/SectionFour'
import Footer from './components/ThisWebsiteOnly/Footer/Footer'
import MainNavigation from './components/ThisWebsiteOnly/Navigation/MainNavigation'

const Homepage = () => {
  return (
    <div className={`${openSans.className} min-h-[2500px]`}>
      <MainNavigation />
      <TitleSection />
      <SectionTwo />
      <ClickHereToDonate />
      <SectionThree />
      <Testimonials />
      <SectionFour />
      <RecentRecipients />
      <Footer />
    </div>
  )
}

export default Homepage
