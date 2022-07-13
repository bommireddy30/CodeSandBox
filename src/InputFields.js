import "./InputFields.css";

function InputFields(props) {
  return (
    <div className="wrapper">
      <input
        type="text"
        value={props.initialValue}
        className="input-area"
        onChange={(e) => props.changeHandler(e.target.value)}
      />
      <button className="btn" onClick={(e) => props.addHandler()}>
        Add Todo
      </button>
    </div>
  );
}

export default InputFields;
