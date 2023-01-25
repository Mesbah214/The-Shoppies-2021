import movieInfo from "../models/movieInfo";
import Button from "./UI/Button";

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
                <li key={nomination.imdbID}>
                  {nomination.Title}
                  <span>{nomination.Year}</span>

                  <Button
                    name={"Denominate"}
                    onDenomination={onDenomination}
                    movie={nomination}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Nominations;
