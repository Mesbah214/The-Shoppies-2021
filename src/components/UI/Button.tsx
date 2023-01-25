import movieInfo from "../../models/movieInfo";

const Button: React.FC<{
  name: string;
  movie: movieInfo;
  onDenomination: (movie: movieInfo) => void;
}> = ({ name, onDenomination, movie }) => {
  return (
    <button
      onClick={() => {
        onDenomination(movie);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
