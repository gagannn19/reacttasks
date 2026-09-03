import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((datas) => {
        setData(datas);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return { data, loading, error };
}
