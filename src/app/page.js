import React from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import TitleSection from './homepage/TitleSection/TitleSection'
import SectionTwo from './homepage/SectionTwo/SectionTwo'
import ClickHereToDonate from './homepage/ClickHereToDonate/ClickHereToDonate'
import SectionThree from './homepage/SectionThree/SectionThree'
import SectionFour from './homepage/SectionFour/SectionFour'
import dynamic from 'next/dynamic'
import MainNavigation from './components/ThisWebsiteOnly/Navigation/MainNavigation'
import Footer from './components/ThisWebsiteOnly/Footer/Footer'

const RecentRecipients = dynamic(() =>
  import('./homepage/recentRecipients/RecentRecipients')
)
const Testimonials = dynamic(() =>
  import('./homepage/testimonials/Testimonials')
)

export const metadata = {
  title: 'Social Support - Love transfusion',
  // description: 'Generated by create next app',
}

const Homepage = () => {
  return (
    <>
      <MainNavigation />
      <div className={`${openSans.className}`}>
        <TitleSection />
        <SectionTwo />
        <ClickHereToDonate />
        <SectionThree />
        <Testimonials />
        <SectionFour />
        <RecentRecipients />
      </div>
      <Footer />
    </>
  )
}

export default Homepage
