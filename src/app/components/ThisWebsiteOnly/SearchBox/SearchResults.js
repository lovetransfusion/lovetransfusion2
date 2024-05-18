import Image from 'next/image'
import React from 'react'
import { Highlight } from 'react-instantsearch'
import Icon_right from '../../icons/Icon_right'
import Link from 'next/link'

const SearchResults = ({ hit }) => {
  console.log('hit', hit)
  //   const { name, image, url } = hit
  const { first_name, sub_title, profile_picture, path_url } = hit
  console.log('path_url', path_url)
  return (
    <div className={'md:px-6'}>
      <Link
        href={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipients/${path_url}`}
      >
        <div
          className={
            'flex justify-between shadow-sm p-5 rounded-md w-full my-1 bg-[#F8FAFC] hover:bg-primary hover:text-white'
          }
        >
          <div className={''}>
            <Highlight
              attribute="first_name"
              className="text-bold"
              hit={hit}
              classNames={{
                highlighted: 'bg-primary text-white',
                nonHighlighted: 'font-semibold',
              }}
            />
            <p className={''}>{sub_title}</p>
          </div>
          <Icon_right className="size-4" />
        </div>
      </Link>
    </div>
  )
}

export default SearchResults
