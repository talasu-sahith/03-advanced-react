import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsloading(false);
          return;
        }
        const user = await resp.json();

        setUser(user);
        console.log(user);
        // setIsError(true);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsloading(false);
    };
    fetchdata();
  }, []);
  if (isloading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error test</h2>;
  }
  return (
    <>
      <h2>Fetch Data </h2>
      <div>
        <img src={user.avatar_url}></img>
        <h4>{user.name}</h4>
      </div>
    </>
  );
};
export default MultipleReturnsFetchData;
