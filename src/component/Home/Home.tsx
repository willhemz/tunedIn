import { ReactElement } from 'react';
import DefaultHome from './DefaultHome';
import UserHome from './UserHome';
import { RootState } from '../../store';

import { useAppSelector, useLoad } from '../../features';

type Component = ReturnType<typeof DefaultHome>;

const Home = (): ReactElement => {
  useLoad();
  const { loggedin, user, planExist } = useAppSelector(
    (state: RootState) => state.user
  );

  let content: Component;
  content = !loggedin || !user || !planExist ? <DefaultHome /> : <UserHome />;
  return content;
};

export default Home;
