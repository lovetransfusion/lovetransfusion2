'use client'
import mainLogo from '@/app/images/main-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const LoginSignupContainer = ({ children, parameters }) => {
  console.log('parameters', parameters)
  return (
    <div
      className={
        'flex md:items-center pt-6 md:pt-0 justify-center h-screen md:bg-[#F9FAFB] text-center relative'
      }
    >
      <div className={'flex flex-col'}>
        <div className={'px-3 md:px-0'}>
          <Link href={'/'}>
            <Image
              src={mainLogo}
              width={355}
              height={70}
              quality={100}
              priority
              alt="Love Transfusion logo"
              className="mx-auto w-[80%] md:w-[80%] lg:w-auto"
            />
          </Link>
          <p className={'font-demiCond text-2xl md:text-3xl mt-2 md:mt-4'}>
            {parameters?.formTitle || 'Sign in to your account'}
          </p>
        </div>
        <div
          className={
            'flex md:shadow-md md:mt-6 p-6 md:p-10 md:min-w-[480px] rounded-md bg-white text-left'
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginSignupContainer
