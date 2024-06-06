import Image from 'next/image'
import logo from '@/app/images/lt-logo-white.png'
import Icon_dashboard from '../components/icons/Icon_dashboard'
import Icon_card from '../components/icons/Icon_card'
import Icon_user from '../components/icons/Icon_user'
import { dashboardMenu } from './dashboardMenu'
import Link from 'next/link'

const DashboardMenuDesktop = () => {
  return (
    <div
      className={
        'bg-primary max-sm:fixed h-screen text-white xl:w-[300px] 2xl:w-[360px] py-10 px-5'
      }
    >
      <div className={'h-fit mb-10'}>
        <Image
          src={logo}
          alt="Love Transfusion logo"
          className="max-w-[260px]"
        />
      </div>
      <div className={'flex flex-col divide-y divide-primary-400'}>
        {dashboardMenu.map((menu, index) => {
          const { name, link, Icon } = menu
          return (
            <Link href={link} key={index}>
              <div className={'flex items-center gap-4 py-4'}>
                <Icon className={'text-white size-7'} />
                <p className={''}>{name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardMenuDesktop
