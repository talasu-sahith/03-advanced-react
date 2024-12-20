const UserContainer = ({ user, setUser }) => {
  return (
    <div className="nav-user">
      {user && <h2>hello there, {user.name}</h2>}
      <button className="btn" onClick={() => setUser(null)}>
        {user ? `Log Out` : `Log in`}
      </button>
    </div>
  );
};
export default UserContainer;
