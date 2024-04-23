import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import logoWhite from '../images/logo-white-svg.svg'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/store'

const ContributeButton = ({
  parameters: {
    id,
    capitalizeFirstName: firstName,
    condition,
    package_image,
    opengraph,
    path_url,
  },
}) => {
  const { setPopup } = useStore(utilityStore)
  const searchParams = useSearchParams()
  useEffect(() => {
    const payment_intent = searchParams.get('payment_intent')
    const redirect_status = searchParams.get('redirect_status')
    if (!!payment_intent && redirect_status === 'succeeded') {
      setPopup({
        data: {
          payment_intent,
          opengraph,
          firstName,
          path_url,
        },
        content: 'PaymentReceipt',
        maxW: '582px',
        noPadding: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const handleClick = () => {
    setPopup({
      data: {
        id,
        firstName,
        condition,
        package_image: package_image?.url ? `${package_image?.url}` : null,
      },
      noPadding: true,
      content: 'CarePackage',
      maxW: '552px',
      bgNotClickable: true,
    })
  }
  return (
    <div
      className={
        'flex bg-primary hover:bg-primary-600 transition-all duration-500 rounded-[10px] py-3 px-[50px] border-4 border-white shadow-custom4 gap-3 cursor-pointer'
      }
      onClick={handleClick}
    >
      <Image src={logoWhite} alt="logo-white" />
      <p className={'text-xl font-demiCond text-white'}>
        Click Here To Contribute
      </p>
    </div>
  )
}

export default ContributeButton
