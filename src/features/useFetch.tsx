import { useEffect } from 'react';
import { instance } from './axios';

interface Data {
  [index: string]: string | number | boolean | string[] | number[];
}

type Url = string;
type Func =
  | React.Dispatch<React.SetStateAction<Data>>
  | React.Dispatch<React.SetStateAction<Data[]>>;
type Type = 'single' | 'multiple';

const useFetch = (url: Url, func: Func, type: Type) => {
  const fetchData = async () => {
    const request = await instance.get(url);
    const randomNumber: number = Math.floor(
      Math.random() * (request.data.results.length - 1)
    );
    type === 'single'
      ? func(request.data.results[randomNumber])
      : func(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, [url]);
};

export default useFetch;
