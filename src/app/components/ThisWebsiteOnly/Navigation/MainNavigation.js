'use client'
import Image from 'next/image'
import whiteLogo from '@/app/images/lt-logo-white.png'
import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { restrictedPathsNavigationMenu } from '@/app/lib/restrictFooterNavigation'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const MainNavigation = () => {
  const pathName = usePathname()

  const restricted = restrictedPathsNavigationMenu.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )

  if (restricted) return

  const nav = [
    { path: '/', name: 'Home' },
    {
      name: 'About',
      path: '/about',
      array: [
        {
          path: '/mission',
          name: 'Mission',
        },
        {
          path: '/how-love-transfusion-was-created',
          name: 'Message from the Founder',
        },
        {
          name: 'What is Love Transfusion?',
          array: [
            { path: '/connections', name: 'Connections' },
            { path: '/resources', name: 'Resources' },
            { path: '/care-packages', name: 'Care Packages' },
            { path: '/follow-up', name: 'Follow Up' },
          ],
        },
      ],
    },
    { path: '/testimonials', name: 'Testimonials' },
    {
      path: 'https://www.facebook.com/pg/LoveTransfusion/photos/?tab=album&album_id=222177344466773',
      name: 'Visit',
    },
    {
      name: 'Contact',
      path: '/contact',
      array: [{ path: '/submit-story', name: 'Submit Story' }],
    },
    { path: '/donate', name: 'Donate' },
  ]

  return (
    <>
      <div
        className={`${openSans.className} flex py-5 shadow-sm bg-primary text-white select-none`}
      >
        <div
          className={
            'flex justify-start xl:justify-between items-center gap-2 md:gap-4 xl:gap-[unset] max-w-[1150px] w-full mx-auto xl:flex-row px-3 md:px-6 xl:px-0'
          }
        >
          <MobileNav parameters={{ nav, pathName, restricted }} />

          <Link href={'/'}>
            <Image
              src={whiteLogo}
              width={396}
              height={60}
              quality={100}
              priority
              className="max-w-[280px] md:max-w-[unset]"
              alt="Love Transfusion logo"
            />
          </Link>
          <DesktopNav parameters={{ nav, pathName }} />
        </div>
      </div>
    </>
  )
}

export default MainNavigation
