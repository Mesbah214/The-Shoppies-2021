import { ReactNode } from "react";
import movieInfo from "../models/movieInfo";

const Movie: React.FC<{
  movie: movieInfo;
  children?: ReactNode;
}> = ({ movie, children }) => {
  return (
    <li>
      {movie.Title}
      <span>{movie.Year}</span>
      {children}
    </li>
  );
};

export default Movie;
