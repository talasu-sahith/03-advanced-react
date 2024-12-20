import UserContainer from "./UserContainer";

const Links = [
  { id: 1, linkname: "home", url: "home" },
  { id: 2, linkname: "about", url: "about" },
];
const NavLinks = ({ user, setUser }) => {
  return (
    <>
      <div className="nav-links">
        <ul>
          {Links.map((item) => {
            const { id, linkname, url } = item;
            return (
              <li key={id}>
                <a href={url}>{linkname}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <UserContainer user={user} setUser={setUser} />
    </>
  );
};

export default NavLinks;
