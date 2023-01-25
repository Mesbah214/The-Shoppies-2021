import movieInfo from "../models/movieInfo";
import Button from "./UI/Button";
import Movie from "./Movie";

const Nominations: React.FC<{
  nominations: movieInfo[];
  onDenomination: (movie: movieInfo) => void;
}> = ({ nominations, onDenomination }) => {
  return (
    <div>
      <ul>
        {nominations
          ? nominations.map((nomination) => {
              return (
                <Movie key={nomination.imdbID} movie={nomination}>
                  <Button
                    name={"Denominate"}
                    onClickHandler={onDenomination}
                    movie={nomination}
                  />
                </Movie>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Nominations;
