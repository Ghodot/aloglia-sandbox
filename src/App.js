import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectInfiniteHits  } from 'react-instantsearch-dom';
import './App.css';


const searchClient = algoliasearch(
  'WOFK5T3M3V',
  '54064bd919c8bf8409d0d3744d789d78'
);

const Hit = (props) => (
  <div>
    <img rowspan="2" src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${props.ID}/header.jpg`}/>
    <h3 class="mon-super-titre">{console.log(props)}{props.Title}</h3>
  </div>
)

const InfiniteHits = ({
  hits,
  hasPrevious,
  refinePrevious,
  hasMore,
  refineNext,
}) => (
  <div>
    <button disabled={!hasPrevious} onClick={refinePrevious}>
      Show previous
    </button>
      {hits.map(hit => hit && Hit(hit))}
    <button disabled={!hasMore} onClick={refineNext}>
      Show more
    </button>
  </div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);


const App = () => (
  <InstantSearch
    indexName="Test_NAME"
    searchClient={searchClient}
  >
    <SearchBox />
    <CustomInfiniteHits/>

  </InstantSearch>
);

export default App