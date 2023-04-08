import { useEffect } from 'react';
import { instance } from './axios';

interface Data {
  [index: string]: string | number | boolean | string[] | number[];
}

type Url = string;
type Func = React.Dispatch<React.SetStateAction<Data>>;

const useFetch = (url: Url, func: Func) => {
  const fetchData = async () => {
    const request = await instance.get(url);
    const randomNumber: number = Math.floor(
      Math.random() * (request.data.results.length - 1)
    );
    func(request.data.results[randomNumber]);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useFetch;
