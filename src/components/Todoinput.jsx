function TodoInput({ onChange, onClick, value }) {
  return (
    <div className="main-div">
      <input
        className="my-input"
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Add TODO"
      />
      <button className="mybtn"
      onClick={onClick} 
      disabled={value == ""} 
      style={{backgroundColor: value === "" && "Gray",
      color: value === "" && "white"}}>
        Add
      </button>
    </div>
  );
}
export default TodoInput;
