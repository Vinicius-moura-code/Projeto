import { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_URL_API;

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL + url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
