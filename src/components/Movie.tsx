import { ReactNode } from "react";
import movieInfo from "../models/movieInfo";

const Movie: React.FC<{
  movie: movieInfo;
  children?: ReactNode;
}> = ({ movie, children }) => {
  return (
    <li className="mb-2">
      {movie.Title}
      <span className="text-sm text-gray-700 mr-2">({movie.Year})</span>
      {children}
    </li>
  );
};

export default Movie;
