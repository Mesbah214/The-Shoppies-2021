import movieInfo from "../models/movieInfo";

const Movies: React.FC<{
  movies: movieInfo[];
  nominations: movieInfo[];
  onAddNomination: (movie: movieInfo) => void;
}> = ({ movies, nominations, onAddNomination}) => {
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
                      onAddNomination(movie);
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
