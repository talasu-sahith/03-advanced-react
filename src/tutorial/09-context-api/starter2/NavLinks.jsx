import UserContainer from "./UserContainer";
const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-conatiner">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
export default NavLinks;
