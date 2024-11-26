import { useState } from "react";
const ErrorExample = () => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  return (
    <>
      <h2>useState error example</h2>
      <label>{value}</label>
      <br></br>
      <button
        style={{ backgroundColor: "navy", padding: "10px", color: "white" }}
        onClick={handleIncrement}
      >
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
