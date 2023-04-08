import { ReactElement, useEffect, useState } from 'react';
import MovieCard from '../../atoms/MovieCard/MovieCard';

import requests from '../../constants/endpoints';
import useFetch from '../../features/useFetch';

interface Data {
  [index: string]: string | number | boolean | string[] | number[];
}

const Banner = (): ReactElement => {
  const [movie, setMovie] = useState<Data>({});

  useFetch(requests.fetchTunedInOriginals, setMovie);

  return (
    <section className="mt-20 p-10 h-64 sm:h-[500px] text-white relative object-contain flex items-center z-10">
      <img
        className="absolute top-0 left-0 w-full h-full -z-10"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="background"
      />
      <MovieCard
        className="w-full xs:w-3/5 lg:w-1/3 flex flex-col gap-2"
        title={
          (movie?.title as string) ||
          (movie?.name as string) ||
          (movie?.original_name as string)
        }
        description={movie?.overview as string}
        variable={150}
      />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-fader z-10"></div>
    </section>
  );
};

export default Banner;
