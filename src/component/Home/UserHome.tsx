import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiThemifyFaviconAlt } from 'react-icons/tfi';
import MovieCard from '../../atoms/MovieCard/MovieCard';
import { instance } from '../../features';
import requests from '../../constants/endpoints';

interface Data {
  [index: string]: string | number | boolean | string[] | number[];
}

const UserHome = (): ReactElement => {
  const navigate = useNavigate();
  const [modifyNav, setModifyNav] = useState<boolean>(false);
  const [movie, setMovie] = useState<Data>({});
  console.log(movie);

  const handlePos = (): void =>
    window.scrollY > 100 ? setModifyNav(true) : setModifyNav(false);

  useEffect(() => {
    window.addEventListener('scroll', handlePos);
    return () => window.removeEventListener('scroll', handlePos);
  }, []);

  const fetchData = async () => {
    const request = await instance.get(requests.fetchTunedInOriginals);
    const randomNumber: number = Math.floor(
      Math.random() * (request.data.results.length - 1)
    );
    setMovie(request.data.results[randomNumber]);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const NavMenu = (
    <nav
      className={`w-full flex justify-between items-center h-20 px-10 transition-all duration-300 ease-linear fixed top-0 left-0 z-50 ${
        modifyNav ? 'bg-transparent' : 'bg-black'
      }`}
    >
      <button
        onClick={(): void => navigate('/')}
        className="text-white font-extrabold text-4xl"
      >
        tunedIn
      </button>
      <button
        className="text-white text-2xl"
        onClick={(): void => navigate('login')}
      >
        <TfiThemifyFaviconAlt />
      </button>
    </nav>
  );

  const banner: ReactNode = (
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

  const content: ReactElement = (
    <div className="bg-black h-[2000px]">
      {NavMenu}
      <main>{banner}</main>
    </div>
  );
  return content;
};

export default UserHome;
