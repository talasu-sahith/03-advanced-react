import { useEffect, useState } from "react";

const useFetch = (defaultUrl) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(defaultUrl);
        if (!resp.ok) {
          setIsLoading(false);
          setIsError(true);
        }
        const user = await resp.json();
        setData(user);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetch;
