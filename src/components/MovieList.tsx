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
      {((name === "movies" && objArr === undefined) ||
        (name === "movies" && objArr.length === 0)) && (
        <h3>No movie to show</h3>
      )}

      {name === "nominations" && objArr.length === 5 && (
        <h3 className="text-red-900 border border-red-500 text-left p-2 bg-red-200 mt-2">
          you've reached the limit
        </h3>
      )}

      <ul className="list-disc mx-auto mt-9 ml-9">
        {objArr &&
          objArr.map((obj) => (
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
          ))}
      </ul>
    </>
  );
};

export default MovieList;
