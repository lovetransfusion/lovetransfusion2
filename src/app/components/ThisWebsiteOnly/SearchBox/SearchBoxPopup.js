import { InstantSearch } from 'react-instantsearch'
import SearchResults from './SearchResults'
import { searchClient } from '@/config/algolia/searchClient'
import CustomSearchBox from './CustomSearchBox'
import { openSans } from '@/utilities/fonts/fonts'
import CustomInfiniteHits from './CustomInfiniteHits'

const SearchBoxPopup = ({ setpopup }) => {
  const handleKeyPress = (e) => {
    if (e.code === 'Escape') {
      console.log('scaped')
      setpopup(null)
    }
  }
  return (
    <div className={`${openSans.className} text-[15px] w-full flex-col pb-4`}>
      <InstantSearch
        searchClient={searchClient}
        setUiState
        indexName="prod_recipients"
      >
        <CustomSearchBox
          // placeholder="Type to start searching."
          autoFocus={false}
          onKeyDown={handleKeyPress}
        />
        <div
          className={
            'overflow-y-auto max-h-[80vh] py-4 border-t-[1px] border-[#F1F5F9]'
          }
        >
          {/* <InfiniteHits
            showPrevious={false}
            hitComponent={SearchResults}
            translations={{
              showMoreButtonText: (
                <div className="flex items-center gap-1 text-sm">
                  Show more <Icon_down className="size-4" />
                </div>
              ),
            }}
            className="w-full"
            classNames={{
              loadMore: 'mx-auto flex justify-center items-center mt-4',
            }}
          /> */}
          <CustomInfiniteHits hitComponent={SearchResults} />
        </div>
      </InstantSearch>
    </div>
  )
}

export default SearchBoxPopup
