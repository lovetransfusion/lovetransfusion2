import React, { Suspense, useState } from 'react'
import Icon_padlock from '../components/icons/Icon_padlock'
import UserForm from './form/UserForm'
import SelectAmount from './selectAmount/SelectAmount'
import Payment from './Payment'

const DonatePopup = () => {
  const [donationAmount, setdonationAmount] = useState(null)

  const [userData, setuserData] = useState({
    firstName: null,
    lastName: null,
    email: null,
  })
  const { firstName, lastName, email } = userData
  return (
    <>
      <div className={'w-full'}>
        <div
          className={
            'flex flex-col items-center justify-center pt-10 pb-12 bg-primary'
          }
        >
          <h2 className="max-sm:text-[36px] max-sm:text-balance max-sm:leading-[45px] text-center md:text-[30px] font-semibold text-white drop-shadow-md">
            Love Transfusion Inc.
          </h2>
          <div
            className={
              'w-[70px] mt-[17px] mb-[18px] h-[5px] bg-white rounded-full'
            }
          />
          <p className={'text-[18.5px] text-white mb-[33px]'}>
            Credit or Debit Card
          </p>
          <div
            className={
              'flex items-center gap-2 bg-white rounded-full px-[14.4px] py-[2px]'
            }
          >
            <Icon_padlock className="text-[#77D006] size-4" />
            <p className={''}>100% Secure Donation</p>
          </div>
        </div>
        <div className={'px-4 md:px-8 py-8'}>
          <p
            className={
              'border-b-[1px] text-[21px] mb-[26px] pb-[10px] border-[#DDDDDD]'
            }
          >
            How much would you like to donate today?
          </p>
          <SelectAmount parameters={{ donationAmount, setdonationAmount }} />
        </div>
        <div className={'px-4 md:px-8 py-[31px] bg-[#f9f9f9]'}>
          <p
            className={
              'border-b-[1px] text-[21px] mb-3 pb-[10px] border-[#DDDDDD]'
            }
          >
            {"Who's giving today?"}
          </p>
          <p className={'mb-6'}>
            {'We’ll never share this information with anyone.'}
          </p>
          <UserForm setuserData={setuserData} />
        </div>
        <div className={'px-4 md:px-8 pt-[31px] pb-[35px]'}>
          <p
            className={
              'border-b-[1px] text-[21px] mb-3 pb-[10px] border-[#DDDDDD]'
            }
          >
            Credit Card Info
          </p>
          <p className={'mb-6'}>This is a secure SSL encrypted payment.</p>
          <Suspense fallback={<h2>Loading Payment...</h2>}>
            {donationAmount && (
              // <PaymentForm
              //   parameters={{
              //     donationAmount,
              //     firstName,
              //     lastName,
              //     email,
              //   }}
              // />
              <Payment
                parameters={{
                  donationAmount,
                  firstName,
                  lastName,
                  email,
                }}
              />
            )}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default DonatePopup
