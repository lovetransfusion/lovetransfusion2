import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import logoWhite from '../images/logo-white-svg.svg'

const ContributeButton = ({ parameters: { setpopup } }) => {
  const handleClick = () => {
    setpopup('carePackage')
  }
  const payment_intent = useSearchParams().get('payment_intent')
  const redirect_status = useSearchParams().get('redirect_status')

  useEffect(() => {
    if (!!payment_intent && redirect_status === 'succeeded') {
      setpopup('paymentReceipt')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={
        'flex bg-primary hover:bg-primary-600 transition-all duration-500 rounded-[10px] py-3 px-[50px] border-4 border-white shadow-custom4 gap-3 cursor-pointer'
      }
      onClick={handleClick}
    >
      <Image src={logoWhite} alt="logo-white" />
      <p className={'font-demiCond text-white'}>Click Here To Contribute</p>
    </div>
  )
}

export default ContributeButton
