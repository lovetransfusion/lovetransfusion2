import MainNavigation from '@/app/components/ThisWebsiteOnly/Navigation/MainNavigation'
import Footer from '@/app/components/ThisWebsiteOnly/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  )
}
