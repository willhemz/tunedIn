import { ReactElement, ReactNode, useState } from 'react';
import DefaultHome from './DefaultHome';
import UserHome from './UserHome';

type Component = ReturnType<typeof DefaultHome>;

const Home = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  let content: Component;
  loading ? (content = <DefaultHome />) : (content = <UserHome />);
  return content;
};

export default Home;
