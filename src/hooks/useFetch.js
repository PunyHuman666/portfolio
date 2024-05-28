import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong 😢");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { projects, isPending, error };
};

export default useFetch;
