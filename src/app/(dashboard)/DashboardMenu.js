import Image from 'next/image'
import logo from '@/app/images/lt-logo-white.png'
import Icon_dashboard from '../components/icons/Icon_dashboard'
import Icon_card from '../components/icons/Icon_card'
import Icon_user from '../components/icons/Icon_user'

const DashboardMenu = () => {
  return (
    <>
      <div className={'h-fit mb-10'}>
        <Image
          src={logo}
          alt="Love Transfusion logo"
          className="max-w-[260px]"
        />
      </div>
      <div className={'flex flex-col divide-y divide-primary-400'}>
        <div className={'flex items-center gap-4 py-4'}>
          <Icon_dashboard className={'text-white size-7'} />
          <p className={''}>Dashboard</p>
        </div>
        <div className={'flex items-center gap-4 py-4'}>
          <Icon_card className={'text-white size-7'} />
          <p className={''}>Payments</p>
        </div>
        <div className={'flex items-center gap-4 py-4'}>
          <Icon_user className={'text-white size-7'} />
          <p className={''}>Account</p>
        </div>
      </div>
    </>
  )
}

export default DashboardMenu
