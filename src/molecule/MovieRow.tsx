import { ReactElement, useState } from 'react';
import MovieCard from '../atoms/MovieCard/MovieCard';
import { Data } from '../component/Home/Banner';
import useFetch from '../features/useFetch';

interface PropsType {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const base_url = 'https://image.tmdb.org/t/p/original/';

const MovieRow = ({
  title,
  fetchUrl,
  isLargeRow = false,
}: PropsType): ReactElement => {
  const [movies, setMovies] = useState<Data[]>([]);
  useFetch(fetchUrl, setMovies, 'multiple');
  return (
    <section className="text-white px-10 py-5">
      <h3 className="font-bold text-3xl mb-5">{title}</h3>
      <div className="flex gap-4 overflow-x-scroll movieRow scroll-smooth overflow-y-hidden">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <article
                key={movie.id as string}
                className={`w-[200px] text-white flex flex-col items-center shrink-0 hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-500 ${
                  isLargeRow ? 'max-h-[400px]' : 'max-h-[200px]'
                }`}
              >
                <img
                  className="w-full h-full"
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name as string}
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
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default MovieRow;
