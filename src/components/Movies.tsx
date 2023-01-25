import movieInfo from "../models/movieInfo";

const Movies: React.FC<{
  movies: movieInfo[];
  nominations: movieInfo[];
  onAddNominationHandler: (move: movieInfo) => void;
}> = ({ movies, nominations, onAddNominationHandler }) => {
  return (
    <div>
      <ul>
        {movies
          ? movies.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  {movie.Title}
                  <span>{movie.Year}</span>
                  <button
                    onClick={() => {
                      onAddNominationHandler(movie);
                    }}
                    disabled={
                      !!nominations.find(
                        (nomination) => movie.imdbID === nomination.imdbID
                      )
                    }
                  >
                    Nominate
                  </button>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Movies;
