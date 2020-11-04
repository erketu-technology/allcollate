import React, { useContext, useEffect, useState } from "react";
import SearchPage from './SearchPage'
import SearchAPI from '../../api/SearchAPI'

export const SearchContext = React.createContext();

function SearchProvider({ query }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchAPI = new SearchAPI();
      const data = await searchAPI.fetchQuery(query);
      setHotels(data);
    };

    fetchData();
  }, []);

  return(
    <SearchContext.Provider value={{ query, hotels }} className="search">
      <SearchPage />
    </SearchContext.Provider>
  )
}
export default SearchProvider;


export const useSearchContext = () => useContext(SearchContext);