import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiThemifyFaviconAlt } from 'react-icons/tfi';
import Banner from './Banner';

const UserHome = (): ReactElement => {
  const navigate = useNavigate();
  const [modifyNav, setModifyNav] = useState<boolean>(false);

  const handlePos = (): void =>
    window.scrollY > 100 ? setModifyNav(true) : setModifyNav(false);

  useEffect(() => {
    window.addEventListener('scroll', handlePos);
    return () => window.removeEventListener('scroll', handlePos);
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

  const content: ReactElement = (
    <div className="bg-black h-[2000px]">
      {NavMenu}
      <main>
        <Banner />
      </main>
    </div>
  );
  return content;
};

export default UserHome;
