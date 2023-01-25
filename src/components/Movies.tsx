import movieInfo from "../models/movieInfo";
import Button from "./UI/Button";
import Movie from "./Movie";

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
                <Movie key={movie.imdbID} movie={movie}>
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
                </Movie>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Movies;
