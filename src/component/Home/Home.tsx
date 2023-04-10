import { ReactElement } from 'react';
import DefaultHome from './DefaultHome';
import UserHome from './UserHome';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Component = ReturnType<typeof DefaultHome>;

const Home = (): ReactElement => {
  const { loggedin } = useSelector((state: RootState) => state.user);

  let content: Component;
  !loggedin ? (content = <DefaultHome />) : (content = <UserHome />);
  return content;
};

export default Home;
