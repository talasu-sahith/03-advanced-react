import { useState } from "react";

const FormInputs = () => {
  const gender = ["male", "female"];
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    checking: false,
    sex: "male",
  });
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>FormInputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={users.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            name="email"
            value={users.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            {" "}
            Password
          </label>
          <input
            type="password"
            name="password"
            value={users.password}
            onChange={handleChange}
            id="password"
            className="form-input"
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="check">Check Box</label>
          <input
            type="checkbox"
            id="check"
            checked={users.checking}
            onChange={(e) => {
              setUsers({ ...users, checking: e.target.checked });
            }}
          ></input>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={users.sex}
            onChange={(e) => setUsers({ ...users, sex: e.target.value })}
          >
            {gender.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormInputs;
