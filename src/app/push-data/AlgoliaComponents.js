import algoliasearch from 'algoliasearch/lite'
import Image from 'next/image'
import { Hits, InstantSearch, SearchBox, Highlight } from 'react-instantsearch'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API
)

const Hit = ({ hit }) => {
  console.log('hit', hit)
  const { first_name, sub_title, profile_picture } = hit
  return (
    <>
      <div className={'flex flex-col shadow-sm p-5 rounded-md w-fit my-2'}>
        <Image
          width={231}
          height={231}
          src={profile_picture?.url}
          alt="profile picture of the recipient"
        />
        <Highlight attribute="first_name" className="text-bold" hit={hit} />
        {/* <p className={''}></p> */}
        <p className={''}>{hit.sub_title}</p>
      </div>
    </>
  )
}

const AlgoliaComponents = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="prod_recipients">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  )
}

export default AlgoliaComponents
