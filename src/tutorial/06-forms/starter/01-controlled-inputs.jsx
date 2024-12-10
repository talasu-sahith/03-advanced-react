import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Controlled Inputs</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            email
          </label>
          <input
            id="email"
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
};
export default ControlledInputs;
