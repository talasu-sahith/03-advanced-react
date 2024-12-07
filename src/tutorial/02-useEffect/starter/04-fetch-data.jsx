import { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <li>
              <img src={avatar_url}></img>
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
