import { openSans } from '@/utilities/fonts/fonts'
import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
import benny from '@/app/_homepage/recentRecipients/images/benny-sq-225x225.webp'
import adley from '@/app/(oldRecipients)/adley-is-battling-leukemia/images/adley-sq.webp'
import emma from '@/app/_homepage/recentRecipients/images/Emma-225x225.webp'

const LoveTransfusionPage = () => {
  return (
    <div className={`${openSans.className} py-10`}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col items-center'
        }
      >
        <div className={'text-center w-[37%] mx-auto'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'divide-y-[1px]'}>
          <div className={'flex py-8 gap-6 items-end'}>
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Benny - Childhood Cancer</p>
              <div className={'flex gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div className={'flex py-8 gap-6 items-end'}>
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Adley - Childhood Cancer</p>
              <div className={'flex gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div className={'flex py-8 gap-6 items-end'}>
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoveTransfusionPage
