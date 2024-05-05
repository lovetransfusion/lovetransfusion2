import Link from 'next/link'
import React from 'react'

const FollowUp = () => {
  return (
    <div className="pb-8">
      <div className={'flex flex-col gap-[10px] leading-[22px]'}>
        <p>
          A goal of Love Transfusion, Inc. is to connect people going through a
          crisis situation with local support groups that specialize in their
          specific need. Nothing beats face to face relationships especially
          when a local organization is equipped to fill a need and provide that
          human touch. It is estimated that help is available for most any
          situation (many of which will even provide transportation), yet most
          people never even know they exist. We work with support groups around
          the globe.
        </p>
        <p>
          If you are a member of a local support group and wish to be added to
          our database, please contact us{' '}
          <Link href={'/contact'}>
            <span>here</span>
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default FollowUp
