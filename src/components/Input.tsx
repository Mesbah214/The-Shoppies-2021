const Input: React.FC<{
  onInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  val: string;
}> = ({ onInputChangeHandler, val }) => {
  return (
    <>
      {/* accept input from users */}
      <label className="mb-1 block" htmlFor="name">
        Movie Title
      </label>
      <input
        className="p-2 block w-full focus:outline-none border border-zinc-600 placeholder:text-sm"
        type="text"
        id="name"
        autoComplete="off"
        placeholder="Search for a movie to nominate e.g. rambo"
        value={val}
        onChange={onInputChangeHandler}
      />
    </>
  );
};

export default Input;
