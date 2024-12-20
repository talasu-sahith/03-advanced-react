import { useContext } from "react";
import { NavbarContext } from "./Navbar";
const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      <p>hello there,{user ? user.name : ``}</p>
      <button className="btn" onClick={logout}>
        {user ? `Log Out` : `Log In`}
      </button>
    </div>
  );
};
export default UserContainer;
