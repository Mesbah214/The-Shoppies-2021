import movieInfo from "../models/movieInfo";
import Button from "./UI/Button";

const Movies: React.FC<{
  movies: movieInfo[];
  nominations: movieInfo[];
  onAddNomination: (movie: movieInfo) => void;
}> = ({ movies, nominations, onAddNomination }) => {
  return (
    <div>
      <ul>
        {movies
          ? movies.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  {movie.Title}
                  <span>{movie.Year}</span>
                  <Button
                    name={"Nominate"}
                    movie={movie}
                    onClickHandler={onAddNomination}
                    isDisabled={
                      !!nominations.find(
                        (nomination) => movie.imdbID === nomination.imdbID
                      )
                    }
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Movies;
