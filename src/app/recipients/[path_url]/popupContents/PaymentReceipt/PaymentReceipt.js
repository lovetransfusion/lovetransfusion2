import LoadingComponent from '@/app/components/LoadingComponent'
import Icon_check3 from '@/app/components/icons/Icon_check3'
import Icon_email from '@/app/components/icons/Icon_email'
import Icon_facebook from '@/app/components/icons/Icon_facebook'
import Icon_padlock from '@/app/components/icons/Icon_padlock'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import Icon_twitter from '@/app/components/icons/Icon_twitter'
// import Icon_twitter from '@/app/components/icons/Icon_twitter'
import Icon_user from '@/app/components/icons/Icon_user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

const PaymentReceipt = ({ parameters: { firstName, path_url, opengraph } }) => {
  const [receiptData, setReceiptData] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const intentId = urlParams.get('payment_intent')

    const initiateGet = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/stripe/checkout/checkout-custom-flow/api`,
          {
            intentId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (response) {
          setReceiptData(response.data.paymentIntent)
          if (response.data.paymentIntent.status === 'succeeded')
            setisLoading(false)
        }
      } catch (error) {
        setisLoading(false)
        console.error('Error during checkout:', error.message)
      }
    }
    initiateGet()
  }, [])

  if (receiptData?.status === 'open') {
    return redirect('/')
  }
  return (
    <div className={'flex w-full justify-center flex-col pt-6'}>
      {!isLoading && (
        <div
          className={
            'flex text-center flex-col justify-start items-center pt-6'
          }
        >
          <div className={'flex flex-col gap-3 items-center px-4 md:px-8'}>
            <Icon_check3 className="text-primary size-20 stroke-primary" />
            <p
              className={'font-mediumCond text-[28px]'}
            >{`Thank you ${receiptData?.metadata?.owner_firstName}!`}</p>
            <p className={'mb-10 text-[#858585 leading-[22px]'}>
              {receiptData.description.includes('Care Package')
                ? `Your contribution will go towards costs associated with sending
            ${firstName} care packages.`
                : `Your contribution will help us raise awareness of ${firstName}'s story.`}
            </p>
          </div>
          <div
            className={
              'flex flex-col items-center bg-[#fbfbfb] w-full py-8 px-4 md:px-6 border-t-[1px] border-[#f2f2f2] border-b-[1px] gap-3'
            }
          >
            <p className={'text-[#858585]'}>
              Help spread the word by sharing your support with your friends and
              followers!
            </p>
            <div className={'flex flex-col md:flex-row gap-3 md:gap-6'}>
              <FacebookShareButton
                hashtag={`#help${firstName}`}
                url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipients/${path_url}`}
              >
                <div
                  className={
                    'flex rounded-[4px] text-[18px] px-3 md:px-6 py-[10px] gap-1 md:gap-2 text-white items-center bg-[#385898] hover:bg-[#314e89]'
                  }
                >
                  <p className={'leading-[22px]'}>Share on Facebook</p>
                  <div className={'flex text-xl md:text-base'}>
                    <Icon_facebook className="text-white size-5" />
                  </div>
                </div>
              </FacebookShareButton>
              <TwitterShareButton
                title={opengraph?.description}
                url={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipients/${path_url}`}
              >
                <div
                  className={
                    'flex rounded-[4px] text-[18px] px-3 md:px-6 py-[10px] gap-1 md:gap-2 text-white items-center bg-[#1DA1F2] hover:bg-[#1A94DA]'
                  }
                >
                  <p className={'leading-[22px]'}>Share on Twitter</p>
                  <div className={'flex text-xl md:text-base'}>
                    <Icon_twitter className="text-white  size-5" />
                  </div>
                </div>
              </TwitterShareButton>
            </div>
          </div>

          <div className={'flex px-4 md:px-8 w-full flex-col gap-4 mt-5'}>
            <p className={'text-center'}>Donor Details</p>
            <div
              className={
                'flex text-[#858585] w-full flex-col justify-between border-2 border-[#f2f2f2] rounded-md py-3'
              }
            >
              <div
                className={
                  'flex flex-col md:flex-row text-left justify-between px-4 py-[6px]'
                }
              >
                <div className={'flex gap-2 items-center'}>
                  <Icon_user className="min-h-4 min-w-4" />
                  <p className={'text-[15px] text-left leading-[20px]'}>
                    DONOR NAME
                  </p>
                </div>
                <p>
                  {receiptData?.metadata?.owner_firstName}{' '}
                  {receiptData?.metadata?.owner_lastName}
                </p>
              </div>
              <div
                className={
                  'flex flex-col md:flex-row text-left justify-between px-4 py-[6px]'
                }
              >
                <div className={'flex gap-2 items-center'}>
                  <Icon_email className="min-h-4 min-w-4" />
                  <p className={'text-[15px] text-left leading-[20px]'}>
                    EMAIL ADDRESS
                  </p>
                </div>
                <p className="leading-[22px] md:text-right">
                  {receiptData?.metadata?.owner_email}
                </p>
              </div>
            </div>
          </div>

          <div className={'flex px-4 md:px-8 w-full flex-col gap-4 mt-5'}>
            <p className={'text-center'}>Donation Details</p>
            <div
              className={
                'flex text-[#858585] w-full flex-col justify-between border-[1px] border-[#f2f2f2] rounded-md pt-3'
              }
            >
              <div
                className={
                  'flex flex-col md:flex-row text-left justify-between px-4 py-[6px]'
                }
              >
                <p className={'text-[15px]'}>PAYMENT STATUS</p>
                <p>
                  {receiptData?.status === 'succeeded'
                    ? 'complete'
                    : receiptData?.status}
                </p>
              </div>
              <div
                className={
                  'flex flex-col md:flex-row text-left justify-between px-4 py-[6px]'
                }
              >
                <p className={'text-[15px]'}>PAYMENT METHOD</p>
                <p>Credit or Debit Card</p>
              </div>
              <div
                className={
                  'flex flex-col md:flex-row text-left justify-between px-4 py-[6px]'
                }
              >
                <p className={'text-[15px]'}>DONATION AMOUNT</p>
                <p>
                  {receiptData?.currency === 'usd' && '$'}
                  {receiptData?.amount_received / 100}
                </p>
              </div>
              <div
                className={
                  'flex flex-col md:flex-row text-left justify-between px-4 py-[6px] bg-[#fbfbfb] border-t-[1px] border-[#f2f2f2]'
                }
              >
                <p className={'text-[15px]'}>DONATION TOTAL</p>
                <p>
                  {receiptData?.currency === 'usd' && '$'}
                  <span style={{ fontWeight: '600' }}>
                    {receiptData?.amount_received / 100}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              'flex rounded-b-md text-[#989898] mt-[35px] items-center border-t-[1px] border-[#f2f2f2] gap-2 justify-center w-full bg-[#fbfbfb] h-[61px]'
            }
          >
            <Icon_padlock className="size-4" />
            <p className={'text-xs'}>Secure donation</p>
          </div>
        </div>
      )}
      {isLoading && <LoadingComponent className={'min-h-[918px]'} />}
    </div>
  )
}

export default PaymentReceipt
