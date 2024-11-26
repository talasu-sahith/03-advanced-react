import { useState } from "react";
const UseStateObject = () => {
  const [data, setData] = useState({
    name: "jhon",
    age: 28,
    hobby: "Swimming",
  });
  const handleShow = () => {
    setData({ name: "Peter", age: 30, hobby: "reading books" });
  };
  return (
    <>
      <label>{data.name}</label>
      <label>{data.age}</label>
      <label>
        {data.name} enjoys {data.hobby}
      </label>
      <button onClick={handleShow}>Show Peter</button>
    </>
  );
};

export default UseStateObject;
