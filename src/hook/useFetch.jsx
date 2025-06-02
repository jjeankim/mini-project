import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFetch = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        console.log(url);
        const data = await res.json();
        setFetchData(data);
      } catch (error) {
        console.log("Fetch Failed!", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) getFetch();
  }, [url]);

  return { fetchData, isLoading, error };
};

export default useFetch;
