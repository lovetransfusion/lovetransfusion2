import Button from '@/app/components/Button'
import Link from 'next/link'
import React from 'react'

const ClickHereToDonate = () => {
  return (
    <div className={'px-3 md:px-0'}>
      <div
        className={
          'max-w-[1150px] mx-auto bg-[#F6F6F6] px-6 md:px-6 lg:px-10 xl:px-[25px] py-5 flex flex-col md:flex-row gap-[30px] items-start md:items-center justify-between border-l-[5px] border-[#0CA2E0] mt-9 box-border'
        }
      >
        <p className={'text-[22px] font-semibold leading-[30px]'}>
          Please consider partnering with us through a tax-deductible donation:
        </p>
        <Link href={'/donate'}>
          <Button size="md" className="text-[18px] w-fit px-6 md:text-nowrap">
            CLICK HERE TO DONATE
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ClickHereToDonate
