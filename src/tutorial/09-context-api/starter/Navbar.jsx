import { useState } from "react";
import NavLinks from "./NavLinks";
import "./Nav.css";
const Navbar = () => {
  const [user, setUser] = useState({ name: "something" });
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <h2>Context API</h2>
        </div>

        <NavLinks user={user} setUser={setUser} />
      </div>
    </nav>
  );
};

export default Navbar;
