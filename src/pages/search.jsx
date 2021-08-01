import { useState, useEffect } from "react";
import CardsMovies from "../components/CardsMovies/CardsMovies";
import SearchInput from "../components/SearchInput";
import { URL_API, API_KEY } from "../utils/constants";


const Search = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (currentSearch !== "") {
      setUrl(`${URL_API}/search/${currentSearch}${API_KEY}&page=1`);
    }
  }, [currentSearch]);

  return (
    <>
      <SearchInput setCurrentSearch={setCurrentSearch} />
      <CardsMovies url={url} />
    </>
  );
};

export default Search;
