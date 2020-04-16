import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  connectStateResults,
  SearchBox,
  Pagination,
  Configure,
  InstantSearch,
  Stats
} from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import theme from '../../../tailwind.config';

import SearchImage from '../../assets/images/search.png';
import OpenImage from '../../assets/images/openForBusiness.png';

import ListingHits from '../marketplace/ListingHits';
import MarketplaceCard from '../marketplace/MarketplaceCard';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_ACCOUNT,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const Results = connectStateResults(
  ({
    searchState,
    searchResults,
    children,
    fallback: Fallback,
    ...renderProps
  }) => (searchResults && searchResults.nbHits > 0 ? (
    children
  ) : (
    <Fallback searchState={searchState} {...renderProps} />
  )),
);

const FallbackResult = ({ searchState: { query } }) => (
  <div className="my-10 text-xl font-bold flex justify-center">
    No results have been found for
    {` '${query}'.`}
  </div>
);

const Search = ({ deeplinkedListing }) => (
  <InstantSearch
    indexName={process.env.GATSBY_ALGOLIA_INDEX}
    searchClient={searchClient}
  >
    <div className="left-panel">
      <Configure hitsPerPage={deeplinkedListing ? 6 : 8}
        filters="NOT hide:true"
        distinct />
    </div>
    <div className="right-panel">
      <div className="bg-dark py-4 md:py-8">
        <div className="px-8 md:px-0 flex flex-row justify-center items-center container mx-auto">
          <img
            alt="Search"
            className="mr-8 hidden md:block"
            src={SearchImage}
          />
          <SearchBox className="seach-box" />
        </div>
      </div>
      <div className="container p-8 l:p-16 mx-auto">
        <div className="flex items-center justify-between">
          <img
            className="md:my-4"
            src={OpenImage}
            alt="Yes, we're open for business"
          />
          <div className="hidden md:block px-12">
            <Pagination
              showFirst
              showLast
              padding={1}
              translations={{
                first: (
                  <FontAwesomeIcon
                    color={theme.theme.extend.colors.dark.default}
                    icon={faAngleDoubleLeft}
                  />
                ),
                next: (
                  <FontAwesomeIcon
                    color={theme.theme.extend.colors.dark.default}
                    icon={faAngleRight}
                  />
                ),
                previous: (
                  <FontAwesomeIcon
                    color={theme.theme.extend.colors.dark.default}
                    icon={faAngleLeft}
                  />
                ),
                last: (
                  <FontAwesomeIcon
                    color={theme.theme.extend.colors.dark.default}
                    icon={faAngleDoubleRight}
                  />
                ),
              }}
            />
          </div>
        </div>

        {/* TODO: re-enable after 75+ busineses
        <div>
          <Stats translations={{
            stats(nbHits) {
              return nbHits > 0 && `${nbHits} small businesses (and counting) who need OUR help more than ever!`;
            },
          }}/>
        </div> */}
        
        <Results
          fallback={(props) => (!deeplinkedListing ? (
            <FallbackResult {...props} />
          ) : (
            <div className="ais-Hits-list">
              <MarketplaceCard highlight hit={deeplinkedListing} />
            </div>
          ))}
        >
          <ListingHits
            defaultHit={deeplinkedListing}
            hitComponent={MarketplaceCard}
          />
        </Results>
      </div>
      <div className="pt-8 pb-16">
        <Pagination
          showFirst
          showLast
          padding={1}
          translations={{
            first: (
              <FontAwesomeIcon
                color={theme.theme.extend.colors.dark.default}
                icon={faAngleDoubleLeft}
              />
            ),
            next: (
              <FontAwesomeIcon
                color={theme.theme.extend.colors.dark.default}
                icon={faAngleRight}
              />
            ),
            previous: (
              <FontAwesomeIcon
                color={theme.theme.extend.colors.dark.default}
                icon={faAngleLeft}
              />
            ),
            last: (
              <FontAwesomeIcon
                color={theme.theme.extend.colors.dark.default}
                icon={faAngleDoubleRight}
              />
            ),
          }}
        />
      </div>
    </div>
  </InstantSearch>
);

export default Search;
