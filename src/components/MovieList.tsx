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
    <>
      {(name === "movies" && objArr === undefined) ||
      (name === "movies" && objArr.length === 0) ? (
        <h3>No movie to show</h3>
      ) : null}

      {name === "nominations" && objArr.length === 5 ? (
        <h3>you've reached the limit</h3>
      ) : null}
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
          : null}
      </ul>
    </>
  );
};

export default MovieList;
