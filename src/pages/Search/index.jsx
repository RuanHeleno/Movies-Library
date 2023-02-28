import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { GlobalContext } from "../../contexts/global";

import { Container, Gallery, Searched, Title } from "./style";

/* const searchURL = import.meta.env.VITE_SEARCH_URL;
const apiKey = import.meta.env.VITE_API_KEY; */

const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "api_key=f2abdee04a685a67f84c3a0c82b68b70";

const Search = () => {
  const { cards, getMovies } = useContext(GlobalContext);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  useEffect(() => {
    try {
      const searchedURL = `${searchURL}?${apiKey}&query=${query}`;

      getMovies(searchedURL);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <Container>
      <Title>
        Resultados para: <Searched>{query}</Searched>
      </Title>
      <Gallery className="movies-container">{cards}</Gallery>
    </Container>
  );
};

export default Search;
