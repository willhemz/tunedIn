import { ReactElement, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiThemifyFaviconAlt } from 'react-icons/tfi';
import { useAppDispatch, useAppSelector } from '../../features';
import { RootState } from '../../store';
import { logout } from '../../features/User/Userslice';
import { auth } from '../../firebase';

const Profile = (): ReactElement => {
  const navigate = useNavigate();
  const {
    user: { email },
    plan: { type },
  } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const NavMenu: ReactNode = (
    <nav
      className={`w-full flex justify-between items-center h-20 px-10 transition-all duration-300 ease-linear fixed top-0 left-0 z-50 `}
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

  const avatar: ReactNode = (
    <button
      className="text-white text-7xl"
      onClick={(): void => navigate('profiles')}
    >
      <TfiThemifyFaviconAlt />
    </button>
  );

  const planComponent = (
    type: string,
    plan: string,
    device: string,
    title: string
  ): ReactNode => (
    <div className="flex justify-between">
      <div>
        <p>{title}</p>
        <p>{device}</p>
      </div>
      {type === plan ? (
        <button
          disabled
          className="bg-white bg-opacity-50 py-2 px-3 font-[500]"
        >
          Current Package
        </button>
      ) : (
        <button className="bg-red-700 bg-opacity-50 py-2 px-3 font-[500]">
          Subscribe
        </button>
      )}
    </div>
  );

  const userDetail: ReactNode = (
    <section className="w-4/5 grid gap-3">
      <p className="bg-white bg-opacity-50 px-3 py-2">{email}</p>
      <p className="font-semibold">Plans (Current Plan: {type})</p>
      <p className="text-sm">Renewal date 04/03/2023</p>
      <div className="grid gap-4 py-2 px-3 text-sm">
        {planComponent(type, 'Mobile', '320px', 'tunedIn Mobile')}
        {planComponent(type, 'Standard', '480px', 'tunedIn Standard')}
        {planComponent(type, 'Basic', '1080px', 'tunedIn Basic')}
        {planComponent(type, 'Premium', '4K+HDR', 'tunedIn Premium')}
      </div>
      <button
        type="button"
        onClick={() => auth.signOut()}
        className="bg-red-700 bg-opacity-50 py-2 px-3 font-[500]"
      >
        Sign Out
      </button>
    </section>
  );

  const content: ReactElement = (
    <div className="bg-black h-screen w-full p-14 flex justify-center items-center">
      {NavMenu}
      <main className="w-1/2 text-white">
        <h2 className="text-5xl mb-3">Edit Profile</h2>
        <div className="flex items-start gap-5">
          {avatar}
          {userDetail}
        </div>
      </main>
    </div>
  );
  return content;
};

export default Profile;
