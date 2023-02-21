import { useContext, useEffect } from "react";

import { GlobalContext } from "../../contexts/global";

import { Container, Gallery, Title } from "./style";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const { cards, getMovies } = useContext(GlobalContext);

  useEffect(() => {
    try {
      const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

      getMovies(topRatedURL);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Title>Melhores filmes: </Title>
      <Gallery className="movies-container">{cards}</Gallery>
    </Container>
  );
};

export default Home;
