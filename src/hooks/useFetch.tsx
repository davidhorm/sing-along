import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () =>
      fetch(url)
        .then((response) => response.text())
        .then((result) => setData(result));

    url && fetchData();
  }, [url]);

  return { data };
};
