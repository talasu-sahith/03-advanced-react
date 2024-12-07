import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>{text || "Default Value"}</h2>
      <h2>{name && "Default Value"}</h2>
      <div>{user && <SomeComponent name={user.name} />}</div>
    </>
  );
};

const SomeComponent = ({ name }) => {
  return <h2>Whatevery Component : {name}</h2>;
};
export default ShortCircuitExamples;
