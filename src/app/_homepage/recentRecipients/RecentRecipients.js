import Image from 'next/image'
import React from 'react'
import { listOfRecipients } from './listOfRecipients'

const RecentRecipients = () => {
  return (
    <div className="relative">
      {listOfRecipients.map((item, i) => {
        const { desc, imgUrl } = item
        return (
          <div key={i} className={''}>
            <Image src={imgUrl} alt="recipient image" />
            <p className={''}>{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default RecentRecipients
