import movieInfo from "../models/movieInfo";

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
                  <button
                    onClick={() => {
                      onDenomination(nomination);
                    }}
                  >
                    Denominate
                  </button>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Nominations;
