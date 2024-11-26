import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(() => {
      console.log(count);
      setCount(count + 1);
      console.log(count), 3000;
    });
  };

  return (
    <>
      <h1>Increment value {count}</h1>
      <button onClick={handleIncrement}>Click Me</button>
    </>
  );
};

export default UseStateGotcha;
