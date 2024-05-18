import React from 'react'
import { useInfiniteHits } from 'react-instantsearch'
import Icon_down from '../../icons/Icon_down'
import Link from 'next/link'
import { Highlight } from 'react-instantsearch'
import Icon_right from '../../icons/Icon_right'

function CustomInfiniteHits(props) {
  const { hits, sendEvent, showPrevious, showMore, isFirstPage, isLastPage } =
    useInfiniteHits(props)
  console.log({ isLastPage, hits })
  return (
    <div>
      <ol>
        {hits.length > 0 ? (
          hits.map((hit) => {
            const { first_name, sub_title, profile_picture, path_url } = hit
            return (
              <li
                key={hit.objectID}
                onClick={() => sendEvent('click', hit, 'Hit Clicked')}
                onAuxClick={() => sendEvent('click', hit, 'Hit Clicked')}
              >
                <div className={'md:px-6'}>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipients/${path_url}`}
                  >
                    <div
                      className={
                        'flex justify-between items-center gap-3 shadow-sm px-5 py-3 rounded-md w-full my-2 bg-[#F8FAFC] hover:bg-primary hover:text-white'
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
                      <Icon_right className="min-w-4 min-h-4" />
                    </div>
                  </Link>
                </div>
              </li>
            )
          })
        ) : (
          <p className={'text-center py-4'}>No results found</p>
        )}
      </ol>
      {!isLastPage && (
        <div
          onClick={showMore}
          className="flex cursor-pointer items-center gap-1 text-sm"
        >
          Show more <Icon_down className="size-4" />
        </div>
      )}
    </div>
  )
}
export default CustomInfiniteHits
