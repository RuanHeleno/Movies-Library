import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../../components/MovieCard";
import { GlobalContext } from "../../contexts/global";

/* const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY; */

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=f2abdee04a685a67f84c3a0c82b68b70";

import { BudgetTitle, BudgetValue, Container, Info, Tagline } from "./style";

const Movie = () => {
  const { movieDetails, getMovieDetails } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    try {
      const movieURL = `${moviesURL}${id}?${apiKey}`;

      getMovieDetails(movieURL);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Container>
      {movieDetails && (
        <>
          <MovieCard movie={movieDetails} showLink={false} />
          <Tagline>{movieDetails.tagline}</Tagline>
          <Info>
            <BudgetTitle>
              <BsWallet2 /> Orçamento
            </BudgetTitle>
            <BudgetValue>${formatCurrency(movieDetails.budget)}</BudgetValue>
          </Info>

          <Info>
            <BudgetTitle>
              <BsGraphUp /> Receita:
            </BudgetTitle>
            <BudgetValue>${formatCurrency(movieDetails.revenue)}</BudgetValue>
          </Info>

          <Info>
            <BudgetTitle>
              <BsHourglassSplit /> Duração:
            </BudgetTitle>
            <BudgetValue>{movieDetails.runtime} minutos</BudgetValue>
          </Info>

          <Info>
            <BudgetTitle>
              <BsFillFileEarmarkTextFill /> Descrição
            </BudgetTitle>
            <BudgetValue>{movieDetails.overview}</BudgetValue>
          </Info>
        </>
      )}
    </Container>
  );
};

export default Movie;
