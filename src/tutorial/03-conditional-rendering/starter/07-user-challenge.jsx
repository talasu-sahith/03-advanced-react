import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: "Sahith" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <h2>user Challenge</h2>
      <SomeComponent user={user} />

      <button className="btn" onClick={user ? logout : login}>
        {user ? "LOG OUT" : "LOG IN"}{" "}
      </button>
    </>
  );
};
const SomeComponent = ({ user }) => {
  return (
    <div>
      <h3>{user ? "Hi " + user.name + ", Please Welcome" : "Kindly Login"}</h3>
    </div>
  );
};
export default UserChallenge;
