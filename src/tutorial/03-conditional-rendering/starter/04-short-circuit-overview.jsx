import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Sushanth");

  return (
    <div>
      short circuit overview
      <h2>Short OR: {text || "hello World"}</h2>
      <h2>Short AND: {text && "hello World"}</h2>
      <h2>Short OR: {name || "hello World"}</h2>
      <h2>Short AND: {name && "hello World"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
