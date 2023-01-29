import movieInfo from "../../models/movieInfo";

const Button: React.FC<{
  name: string;
  movie: movieInfo;
  className?: string;
  onClickHandler: (movie: movieInfo) => void;
  isDisabled?: boolean
}> = ({ name, onClickHandler, movie, isDisabled, className }) => {
  const classes = `bg-gray-100 border border-zinc-400 px-2 py-1 rounded text-sm hover:bg-gray-200 duration-500 ${className} ${isDisabled &&' opacity-40'}`;
  return (
    <button
      className={classes}
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
