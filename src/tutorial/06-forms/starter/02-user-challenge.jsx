import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeID = Date.now();
    users.push({ id: fakeID, name: name });
    setName("");
    console.log(users);
  };
  const handleRemove = (id) => {
    var newdata = users.filter((item) => item.id != id);
    setUsers(newdata);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <div className="users">
        <ul>
          {users.map((item) => {
            return <User key={item.id} {...item} handleRemove={handleRemove} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const User = ({ id, name, handleRemove }) => {
  return (
    <li className="users li">
      <h5>{name}</h5>
      <button className="btn btn-hipster" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </li>
  );
};
export default UserChallenge;
