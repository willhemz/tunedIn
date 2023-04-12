import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiThemifyFaviconAlt } from 'react-icons/tfi';
import Banner from './Banner';
import MovieRow from '../../molecule/MovieRow';
import requests from '../../constants/endpoints';

const UserHome = (): ReactElement => {
  const navigate = useNavigate();
  const [modifyNav, setModifyNav] = useState<boolean>(false);

  const handlePos = (): void =>
    window.scrollY > 100 ? setModifyNav(true) : setModifyNav(false);

  useEffect(() => {
    window.addEventListener('scroll', handlePos);
    return () => window.removeEventListener('scroll', handlePos);
  }, []);

  const NavMenu: ReactNode = (
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
        onClick={(): void => navigate('profiles')}
      >
        <TfiThemifyFaviconAlt />
      </button>
    </nav>
  );

  const content: ReactElement = (
    <div className="bg-black">
      {NavMenu}
      <main>
        <Banner />
        <MovieRow
          title="TUNEDIN ORIGINALS"
          fetchUrl={requests.fetchTunedInOriginals}
          isLargeRow={true}
        />
        <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MovieRow title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <MovieRow
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <MovieRow title="Drama" fetchUrl={requests.fetchDrama} />
        <MovieRow
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </main>
    </div>
  );
  return content;
};

export default UserHome;
