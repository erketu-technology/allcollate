import React from 'react';
import ClearFilters from './Filters/ClearFilters';

import SearchFiltersLocations from './Filters/Locations';
import Rates from './Filters/Rates';
import StarRating from './Filters/StarRating';
import YearOpened from './Filters/YearOpened';
import YearRenovated from './Filters/YearRenovated';
import SearchResults from './SearchResults';

function SearchPage() {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <ClearFilters />
        <SearchFiltersLocations />
        <StarRating />
        <Rates />
        <YearRenovated />
        <YearOpened />
      </div>
      <div className='col-md-9 search__results'>
        <SearchResults />
      </div>
    </div>
  );
}

export default SearchPage;
