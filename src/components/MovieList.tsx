import movieInfo from "../models/movieInfo";
import Movie from "./Movie";
import Button from "./UI/Button";

const MovieList: React.FC<{
  objArr: movieInfo[];
  searchArr?: movieInfo[];
  name: string;
  onMovieListHandler: (movie: movieInfo) => void;
}> = ({ objArr, name, onMovieListHandler, searchArr }) => {
  return (
    <ul>
      {objArr
        ? objArr.map((obj) => (
            <Movie key={obj.imdbID} movie={obj}>
              {name === "movies" ? (
                <Button
                  name={"Nominate"}
                  movie={obj}
                  onClickHandler={onMovieListHandler}
                  isDisabled={
                    !!searchArr!.find(
                      (nomination) => obj.imdbID === nomination.imdbID
                    )
                  }
                />
              ) : (
                <Button
                  name={"Denominate"}
                  onClickHandler={onMovieListHandler}
                  movie={obj}
                />
              )}
            </Movie>
          ))
        : "No movie to show!"}
    </ul>
  );
};

export default MovieList;
