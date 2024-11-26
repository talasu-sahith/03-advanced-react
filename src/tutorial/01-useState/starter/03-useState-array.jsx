import { useState } from "react";
const UseStateArray = () => {
  const [names, setNames] = useState([
    { id: 1, person: "jhon" },
    { id: 2, person: "peter" },
    { id: 3, person: "david" },
    { id: 4, person: "steve" },
  ]);
  const handleRemove = (no) => {
    setNames(names.filter((item) => item.id != no));
  };
  return (
    <>
      {names.map((prop) => {
        const { id, person } = prop;
        return (
          <div>
            <label>{person}</label>
            <br></br>
            <button onClick={() => handleRemove(id)}>remove</button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setNames([]);
        }}
      >
        reset
      </button>
    </>
  );
};

export default UseStateArray;
