const Input: React.FC<{
  onInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  val: string;
}> = ({ onInputChangeHandler, val }) => {
  return (
    <div>
      {/* accept input from users */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={val} onChange={onInputChangeHandler} />
    </div>
  );
};

export default Input;
