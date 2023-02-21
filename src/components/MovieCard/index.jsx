import { LinkDetalhes } from "../../pages/Home/style";

import { Card, Image, Infos, Star, Title } from "./style";

const imageURL = import.meta.env.VITE_IMAGE_URL;

const MovieCard = (props) => {
  const { movie, showLink = true } = props;

  return (
    <Card>
      <Image src={imageURL + movie.poster_path} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Infos>
        <Star /> {movie.vote_average}
      </Infos>
      {showLink && (
        <LinkDetalhes to={`/movie/${movie.id}`}>Detalhes</LinkDetalhes>
      )}
    </Card>
  );
};

export default MovieCard;
