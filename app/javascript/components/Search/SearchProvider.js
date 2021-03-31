import React, { useContext, useEffect, useState } from 'react';
import SearchPage from './SearchPage';
import SearchAPI from '../../api/SearchAPI';

export const SearchContext = React.createContext();

function SearchProvider({ query }) {
  const [hotels, setHotels] = useState([]);
  const [locations, setLocations] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pagingData, setPagingData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const searchAPI = new SearchAPI();
      let data = [];

      if (locations.length) {
        data = await searchAPI.fetchAtLocations(locations, activePage);
      } else {
        data = await searchAPI.fetchQuery(query, activePage);
      }

      setHotels(data.results);
      setPagingData(data.pagingData);
    };

    fetchData();
  }, [locations, activePage]);

  return (
    <SearchContext.Provider
      value={{
        query,
        hotels,
        locations,
        setLocations: (locations) => setLocations(locations),
        activePage,
        handlePageChange: (pageNum) => {
          setActivePage(pageNum);
        },
        setActivePage,
        setHotels,
        pagingData,
      }}
      className='search'
    >
      <SearchPage />
    </SearchContext.Provider>
  );
}

export default SearchProvider;
export const useSearchContext = () => useContext(SearchContext);