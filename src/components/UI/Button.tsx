import movieInfo from "../../models/movieInfo";

const Button: React.FC<{
  name: string;
  movie: movieInfo;
  onClickHandler: (movie: movieInfo) => void;
  isDisabled?: boolean
}> = ({ name, onClickHandler, movie, isDisabled }) => {
  return (
    <button
      onClick={() => {
        onClickHandler(movie);
      }}
      disabled={isDisabled}
    >
      {name}
    </button>
  );
};

export default Button;
