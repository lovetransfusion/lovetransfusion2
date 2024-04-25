import Image from 'next/image'
import React from 'react'
import footerLogo from '../images/footer-logo.png'
import Button from '@/app/components/Button'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <div
        className={
          'flex bg-[#288CCC] px-3 md:px-6 lg:px-10 xl:pl-1 text-[#FAFDFF] pt-[30px] pb-12'
        }
      >
        <div className="max-w-[1300px] mx-auto">
          <div
            className={
              'flex flex-col lg:flex-row xl:pl-6 xl:pr-0 gap-6 lg:gap-8 xl:gap-0 '
            }
          >
            <div
              className={
                'flex flex-col gap-[12px] xl:min-w-[526px] leading-5 lg:min-w-[31%]'
              }
            >
              <div className={'max-w-[378px]'}>
                <Image quality={100} src={footerLogo} alt="logo" />
              </div>

              <p className={'pl-0 lg:pl-3 xl:w-[399px]'}>
                Love Transfusion, Inc. is a non-profit organization with a
                mission to help individuals facing difficult situations. We
                believe that by connecting people who hurt with those who care,
                the resulting expressions of love and encour- agement help ease
                people through life’s most difficult moments.
              </p>
            </div>
            <div
              className={
                'flex flex-col pt-[11px] xl:min-w-[462px]  lg:min-w-[31%]'
              }
            >
              <p className={'text-2xl'}>TESTIMONIALS</p>
              <div className={'flex flex-col italic leading-5 xl:w-[344px]'}>
                <p className="mt-[9px]">
                  “Oh wow, you guys have made our night, week, month “Miette” is
                  so excited… she is absolutely over the moon thank you. for
                  your love and prayers and well wishes… thank you so very much
                  Love Transfusion.”
                </p>
                <p className="mt-5">Natalie S. – Queensland, Australia</p>
              </div>
            </div>
            <div
              className={
                'flex flex-col pt-[11px] xl:min-w-[279px] xl:ml-auto  lg:min-w-[31%]'
              }
            >
              <p className={'text-2xl'}>CONTACT</p>
              <div className={'flex flex-col mt-1 leading-5'}>
                <p className="font-demiCond text-xl">Love Transfusion, Inc.</p>
                <p>1201 N Orange St, Suite 799</p>
                <p>Wilmington, DE 19801</p>
                <p>(800) 291-7276 | (302) 838-4232</p>
                <div className="mt-[14px]">
                  <p>{`501(c)(3) Nonprofit Organization`}</p>
                  <p className={''}>Tax ID #27-2829895</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'flex bg-[#288CCC] border-t-[1px] border-[#77bde5] text-[#FAFDFF] text-sm py-[25px]'
        }
      >
        <div className="flex flex-col md:flex-row justify-between w-full px-[10px] max-w-[1300px] mx-auto">
          <p>Copyright © 2010-{currentYear} Love Transfusion, Inc.</p>
          <p>A 501(c)(3) Nonprofit Organization – Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
