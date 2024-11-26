import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>You Clicked {count}</h2>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default UseStateBasics;
