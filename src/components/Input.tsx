const Input: React.FC<{
  onInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onInputChangeHandler }) => {
  return (
    <div>
      {/* accept input from users */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={onInputChangeHandler} />
    </div>
  );
};

export default Input;
