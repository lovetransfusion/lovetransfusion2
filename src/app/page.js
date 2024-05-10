import React from 'react'
import { openSans } from '@/utilities/fonts/fonts'
import TitleSection from './_homepage/TitleSection/TitleSection'
import SectionTwo from './_homepage/SectionTwo/SectionTwo'
import ClickHereToDonate from './_homepage/ClickHereToDonate/ClickHereToDonate'
import SectionThree from './_homepage/SectionThree/SectionThree'
import SectionFour from './_homepage/SectionFour/SectionFour'
import dynamic from 'next/dynamic'

const RecentRecipients = dynamic(() =>
  import('./_homepage/recentRecipients/RecentRecipients')
)
const Testimonials = dynamic(() =>
  import('./_homepage/testimonials/Testimonials')
)

const Homepage = () => {
  return (
    <div className={`${openSans.className}`}>
      <TitleSection />
      <SectionTwo />
      <ClickHereToDonate />
      <SectionThree />
      <Testimonials />
      <SectionFour />
      <RecentRecipients />
    </div>
  )
}

export default Homepage
